import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, symlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function patchTailwindResolver(projectRoot: string) {
	const file = join(projectRoot, 'node_modules', '@tailwindcss', 'node', 'dist', 'index.js');
	if (!existsSync(file)) {
		return;
	}

	let text = readFileSync(file, 'utf8');
	const replacements: Array<[string, string]> = [
		['conditionNames:["style"],modules:De});async function ii', 'conditionNames:["style"],modules:De,symlinks:!1});async function ii'],
		['conditionNames:["node","import"],modules:De}),oi', 'conditionNames:["node","import"],modules:De,symlinks:!1}),oi'],
		[
			'conditionNames:["node","require"],modules:De});async function Ct',
			'conditionNames:["node","require"],modules:De,symlinks:!1});async function Ct',
		],
	];

	let changed = false;
	for (const [from, to] of replacements) {
		if (text.includes(from)) {
			text = text.replace(from, to);
			changed = true;
		}
	}

	if (changed) {
		writeFileSync(file, text);
	}
}

function getSafeWorkingDirectory(rootDir: string): string {
	if (process.platform !== 'win32' || !rootDir.includes('#')) {
		return rootDir;
	}

	const tempRoot = process.env.TEMP || process.env.TMP;
	if (!tempRoot) {
		return rootDir;
	}

	const linkRoot = join(tempRoot, 'instanswer-links');
	mkdirSync(linkRoot, { recursive: true });

	const hash = createHash('sha1').update(rootDir).digest('hex').slice(0, 10);
	const linkPath = join(linkRoot, `ws-${hash}`);

	if (!existsSync(linkPath)) {
		// Junction avoids admin privileges and gives a path without '#'.
		symlinkSync(rootDir, linkPath, 'junction');
	}

	return linkPath;
}

async function main() {
	const watch = process.argv.includes('--watch');
	const rootDir = process.cwd();

	patchTailwindResolver(rootDir);

	const cwd = getSafeWorkingDirectory(rootDir);

	const args = ['postcss', 'app/globals.css', '-o', '.framework/dev/globals.css'];

	if (watch) {
		args.push('-w');
	}

	const proc = Bun.spawn(['bunx', ...args], {
		cwd,
		stdin: 'inherit',
		stdout: 'inherit',
		stderr: 'inherit',
	});

	const exitCode = await proc.exited;
	process.exit(exitCode);
}

main().catch(error => {
	console.error(error);
	process.exit(1);
});
