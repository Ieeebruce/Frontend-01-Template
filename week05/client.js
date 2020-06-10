class Request {
  // method
  // url = host port path
  // body  key-value
  // headers
  constructor(options) {
    this.method = options.method || "GET";
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.path || "/";
    this.body = options.body || {};
    this.headers = options.headers || {};
    if (!this.headers["Content-Type"]) {
      this.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (this.headers["Content-Type"] === "application/json") {
      this.bodyText = JSON.stringify(this.body);
    } else if (
      this.headers["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      this.bodyText = Object.entries(this.body)
        .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
        .join("&");
      this.headers["Content-Length"] = this.bodyText.length;
    }
  }
  toString() {
    return `${this.method} ${this.path} HTTP/1.1\r
    ${Object.entries(this.headers)
      .map(([k, v]) => `${k}:${v}`)
      .join("\r")}\r
    ${this.bodyText}`;
  }
  open(method, url) {}
  send(body) {}
}
class Response {}

const net = require("net");
const client = net.createConnection(
  {
    host: "127.0.0.1",
    port: 8124,
  },
  () => {
    let request = new Request({
      method: "POST",
      host: "127.0.0.1",
      port: "8124",
      path: "/",
      body: {
        name: "lht",
      },
    });
    console.log({ request });
    client.write(request.toString());

    /**------------------------------------------------ */
    // console.log("connected to server!");
    // client.write(`
    // POST / HTTP1.1\r
    // Host: 127.0.0.1\r
    // Content-Type:application/x-www-form-urlencoded\r
    // Content-Length:19\r
    // \r
    // name=1&password=123`);
  }
);
client.on("data", (data) => {
  console.log("data");
  console.log(data.toString());
  client.end();
});
client.on("end", () => {
  console.log("disconnected from server");
});
client.on("error", (err) => {
  console.log(err.toString());
  client.end();
});
