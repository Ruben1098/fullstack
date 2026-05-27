import { join } from 'path';
import { env, file, serve } from 'bun';

// pages

export default async () => {
	const { default: index } = await import('./dev/layout.html');

	const server = serve({
		port: env.PORT || 3001,
		routes: {
			'/*': index,
			'/fonts/:font': {
				async GET(req, res) {
					const fontName = req.params.font; // es: "MyFont.otf"

					return new Response(file(join(__dirname, '..', 'public', 'fonts', fontName)).stream(), {
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Access-Control-Allow-Methods': 'GET',
							'Content-Type': `font/${fontName.split('.').pop()}`,
							'Content-Disposition': `inline; filename="${fontName}"`,
							'Transfer-Encoding': 'chunked',
							'Cache-Control': 'no-cache, no-store, must-revalidate',
						},
					});
				},
			},
			'/globals.css': {
				async GET(req, res) {
					const stream = file(__dirname + '/dev/globals.css').stream();
					return new Response(stream, {
						headers: {
							'Content-Type': 'text/css',
							'Content-Disposition': 'inline',
							'Cache-Control': 'no-cache',
							'Transfer-Encoding': 'chunked',
							'Accept-Encoding': 'gzip, compress, br',
						},
					});
				},
			},
			'/:filename': {
				async GET(req, res) {
					const allowedExtensions = ['webp', 'jpg', 'jpeg', 'png', 'gif', 'svg'];
					const filename = req.params.filename;
					const ext = filename.split('.').pop()?.toLowerCase();
					if (!ext || !allowedExtensions.includes(ext)) {
						return new Response('Not found', { status: 404 });
					}
					const filePath = join(__dirname, '..', 'public', filename);
					try {
						const stream = file(filePath).stream();
						const contentTypes = {
							webp: 'image/webp',
							jpg: 'image/jpeg',
							jpeg: 'image/jpeg',
							png: 'image/png',
							gif: 'image/gif',
							svg: 'image/svg+xml',
						};
						return new Response(stream, {
							headers: {
							'Content-Type': contentTypes[ext] || 'application/octet-stream',
							'Content-Disposition': `inline; filename="${filename}"`,
							'Cache-Control': 'no-cache',
							'Transfer-Encoding': 'chunked',
							'Accept-Encoding': 'gzip, compress, br',
						},
						});
					} catch (e) {
						return new Response('Not found', { status: 404 });
					}
				},
			},
			'/sitemap.xml': {
				async GET() {
					const res = await fetch('http://localhost:4001/sitemap', {
						method: 'GET',
					});

					const { data } = (await res.json()) as { data: string };

					return new Response(data, {
						headers: {
							'Content-Type': 'text/xml',
							'Content-Disposition': 'inline',
							'Cache-Control': 'no-cache, no-store, must-revalidate',
						},
					});
				},
			},
		},
		development: {
			// Enable browser hot reloading in development
			hmr: true,
			// Echo console logs from the browser to the server
			console: true,
		},
	});

	process.on('uncaughtException', err => {
		if (err.message.includes('Invalid URL')) return;
		console.error(err);
	});

	process.on('unhandledRejection', reason => {
		if (String(reason).includes('Invalid URL')) return;
		console.error(reason);
	});

	return server;
};
