import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
dotenv.config();

const app = express();
const server = createServer(app);

const PORT = process.env.PORT;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.get("/", (req, res) => {
  res.status(200).json("WE LIVE");
});
server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
// import { createServer } from "http";
// import { Server } from "socket.io";
// const httpServer = createServer();
// const io = new Server(httpServer, {
//   cors: {
//     origin:
//       process.env.NODE_ENV === "production" ? false : ["http://localhost:5500"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`user ${socket.id} connected`);
//   socket.on("message", (data) => {
//     console.log(data);
//     io.emit("message", `${socket.id.substring(0.5)} :  ${data}`);
//   });
// });

// httpServer.listen(4000, () => {
//   console.log("listening on port 4000");
// });
