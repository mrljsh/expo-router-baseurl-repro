import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const BASE_URL = "/m";
const DIST = new URL("./dist/", import.meta.url).pathname;
const PORT = 3000;

const TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".ttf": "font/ttf",
};

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, "http://localhost");
  if (pathname !== BASE_URL && !pathname.startsWith(BASE_URL + "/")) {
    res.writeHead(404).end(`Not under ${BASE_URL}`);
    return;
  }
  // Strip the prefix, serve the file if it exists, otherwise fall back to
  // index.html (web.output = "single").
  const rel = normalize(pathname.slice(BASE_URL.length)).replace(/^\/+/, "");
  const candidates = [join(DIST, rel), join(DIST, "index.html")];
  for (const file of candidates) {
    try {
      const body = await readFile(file);
      res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
      res.end(body);
      return;
    } catch {}
  }
  res.writeHead(404).end();
}).listen(PORT, () => {
  console.log(`Serving dist/ at http://localhost:${PORT}${BASE_URL}/`);
});
