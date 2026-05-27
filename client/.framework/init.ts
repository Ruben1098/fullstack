import { join } from 'path';
import { cp, mkdir, rm } from 'fs/promises';

const devDir = join(__dirname, 'dev'),
	root = join(__dirname, '..');

await rm(join(root, 'vendors'), { recursive: true, force: true });
await cp(join(__dirname, 'init', 'vendors'), join(root, 'vendors'), { recursive: true, force: true });

await rm(devDir, { recursive: true, force: true });
await mkdir(devDir, { recursive: true });
