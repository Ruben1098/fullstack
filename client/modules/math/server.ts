import { join } from "path";

const port = 3000;
const publicDir = join(import.meta.dir, "public");

const server = Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    
    // Serve static files da cartella public
    let filePath = join(publicDir, url.pathname === "/" ? "index.html" : url.pathname);
    
    const file = Bun.file(filePath);
    
    if (await file.exists()) {
      return new Response(file);
    }
    
    // Se il file non esiste, torna 404
    return new Response("404 - File not found", { status: 404 });
  },
});

console.log(`🚀 Server in esecuzione su http://localhost:${port}`);
console.log(`📁 Serving files from: ${publicDir}`);
