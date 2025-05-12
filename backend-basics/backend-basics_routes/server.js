import { createServer } from "node:http";

export const server = createServer((req, res) => {
  const { url } = req;
  if (url === "/api/fish/1") {
    res.statusCode = 200;
    res.end("Fish 1");
  } else if (url === "/api/fish/2") {
    res.statusCode = 200;
    res.end("Fish 2");
  }
});
