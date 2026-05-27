import { readdir, writeFile } from 'fs/promises';
import { join } from 'path';

const categories = (await readdir('./constants/Lezioni', { withFileTypes: true })).filter(c => c.isDirectory()),
	courses = await Promise.all(
		categories.map(async dirent => {
			const dirents = await readdir(join(dirent.parentPath, dirent.name), { withFileTypes: true });
			return (
				await Promise.all(
					dirents
						.filter(c => c.isDirectory())
						.map(async subDirent => {
							return (
								await readdir(join(dirent.parentPath, dirent.name, subDirent.name), { withFileTypes: true })
							).filter(c => c.isFile());
						}),
				)
			)
				.flat(2)
				.concat(dirents.filter(c => c.isFile()));
		}),
	);

await writeFile('./constants/contents.json', JSON.stringify(courses.flat().map(c => require(join(c.parentPath, c.name)).default)));
