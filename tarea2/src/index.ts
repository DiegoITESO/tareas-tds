import express from "express";
import routes from "./app/routes";
import { Server} from "http";
import { Server as SocketServer} from "socket.io"
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(routes);

app.get("/", (req, res) => {
  res.send("api works!");
});

const server: Server = app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

const io = new SocketServer(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Se creo una nueva conexion")

  socket.on("chat:message", (msg: string) => {
    socket.broadcast.emit("chat:message", msg);
  });
  socket.on("disconnect", () => {
    console.log("socket disconnected");
  });
});