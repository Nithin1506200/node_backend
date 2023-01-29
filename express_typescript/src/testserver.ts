import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = createServer(
  (_request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("hellow world");
  }
);
server.listen(port, hostname, () => {
  console.log(`nodejs server started at hostname:${hostname} port:${port} `);
});
