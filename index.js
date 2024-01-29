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
    origin: process.env.URL,
  },
});

const UserState = {
  users: [],
  setUsers: function (newUsersArray) {
    this.users = newUsersArray;
  },
};
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("userjoinroom", ({ name, room }) => {});
});

app.get("/", (req, res) => {
  res.status(200).json("WE LIVE");
});
server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

const userActivity = (id, name, room) => {
  const user = { id, name, room };
  UserState.setUsers([
    ...UserState.users.filter((user) => user.id !== id),
    user,
  ]);
};
