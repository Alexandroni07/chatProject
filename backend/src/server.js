const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

wss.on("connection", (ws) => {
  //erro padrão que o js da
  ws.on("error", console.error);

  //Dispara sempre que alg mandar algo e manda pro servidor
  ws.on("message", (data) => {
    //Envia pra todo mundo oque foi mandado no message
    wss.clients.forEach((client) => client.send(data.toString()));
  });

  //Aparece no console sempre que alg conecta
  console.log("client connected");
});
