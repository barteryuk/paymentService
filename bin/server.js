const app = require("../app");
const http = require("http");
const PORT = process.env.PORT || 4005;
const server = http.createServer(app);

server.listen(PORT, () =>
  console.log("Server paymentService is running on: ", PORT)
);
