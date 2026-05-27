import app from './app';
import { join, relative } from 'path';
import { spawn } from 'bun';
import chokidar from 'chokidar';
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';

import initRoot from './templates/root';
import { buildTanstackRoutePattern } from './lib/utils';

const devDir = join(__dirname, 'dev'),
	root = join(__dirname, '..'),
	appDir = join(root, 'app'),
	ignore = ['**/node_modules/**', '**/dist/**', '**/build/**'],
	dirents = await readdir(appDir, { withFileTypes: true, recursive: true });

const roots: (Parameters<typeof initRoot>[0] & { _id: string; rootId: string })[] = [];

export default async () => {
	for (const dirent of dirents.toSorted((a, b) => (a.isFile() && a.name.startsWith('layout') ? -1 : 1))) {
		if (['.tsx', '.ts', '.css'].every(ext => !dirent.name.endsWith(ext))) continue;

		const destDir = dirent.parentPath.replace(appDir, devDir);

		// if (dirent.isDirectory()) await mkdir(join(destDir, dirent.name), { recursive: true });
		if (dirent.isFile()) {
			const filePath = join(dirent.parentPath, dirent.name);
			// await writeFile(join(destDir, dirent.name), await readFile(filePath));

			if (dirent.parentPath === appDir && dirent.name.startsWith('layout')) {
				const [_, _id] = dirent.name.split('.'),
					rootId = require(filePath).rootId ?? `root-${_id}`,
					selector = `#entry #${rootId}`;

				roots.push({ _id, rootId, selector, layoutDir: relative(root, filePath).replaceAll('\\', '/'), pages: [] });
			} else if (dirent.name.endsWith('.tsx') && dirent.name.startsWith('island')) {
				const [_, _id] = dirent.name.split('.');
				roots.find(root => root._id === _id)?.pages?.push({ path: buildTanstackRoutePattern({ parentPath: appDir, pageDir: filePath }), dir: relative(root, filePath).replaceAll('\\', '/') });
				console.log('roots => ', { path: buildTanstackRoutePattern({ parentPath: appDir, pageDir: filePath }), dir: relative(root, filePath).replaceAll('\\', '/') });
			}
		}
	}

	roots.sort((a, b) => parseInt(a._id) - parseInt(b._id));

	await Promise.all(
		roots.map(async root => {
			await writeFile(join(devDir, `$root.${root._id}.tsx`), await initRoot(root));
		}),
	);

	const layout_template = await readFile(join(__dirname, 'templates', 'layout.html'), 'utf-8'),
		//  must match {{ $ROOTS }}
		layout = layout_template.replace(/\{\{\s*(\$\w+)\s*\}\}/g, (_, key) => {
			switch (key) {
				case '$PRELOADS':
					return ` <link rel="modulepreload" href="./$root.${roots[0]._id}.tsx" as="script" crossorigin="anonymous" />`;

				case '$ROOTS':
					return roots.map(({ rootId }) => `<div id="${rootId}" class="contents"></div>`).join('\n\t\t');

				case '$MODULES':
					return roots.map(({ _id }) => `<script type="module" src="./$root.${_id}.tsx" crossorigin="anonymous" fetchpriority="${_id === '1' ? 'high' : 'low'}" ${_id === '1' ? 'async' : 'defer'}></script>`).join('\n\t\t');

				default:
					return '';
			}
		});

	await writeFile(join(devDir, 'layout.html'), layout);
	// spawn(['postcss', 'app/globals.css', '-o', '".framework/dev/globals.css"', '-w']);
	await app();
};

// const watcher = chokidar.watch(root, {
// 	persistent: true,
// 	ignoreInitial: true,
// 	depth: 99,
// });

// watcher
// 	.on('add', path => {
// 		console.log('File creato:', path);
// 	})
// 	.on('addDir', path => {
// 		console.log('Cartella creata:', path);
// 	})
// 	.on('change', path => {
// 		console.log('File modificato:', path);
// 	})
// 	.on('unlink', path => {
// 		console.log('File eliminato:', path);
// 	})
// 	.on('unlinkDir', path => {
// 		console.log('Cartella eliminata:', path);
// 	})
// 	.on('error', error => {
// 		console.error('Errore watcher:', error);
// 	});
