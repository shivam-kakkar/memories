import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

const app = express();
const server = createServer(app);
const io = new Server(server);
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

let users = [];
let messages = {};

app.get("/messages", (req, res) => {
  res.status(200).json(messages);
});

app.get("/messages/:email", (req, res) => {
  const { email } = req.params;
  res.status(200).json(messages[email]);
});

export default messages;

io.on("connection", socket => {
  console.log("connected");
  const user = socket.handshake.auth.user;
  const existingUser = users.find(person => person.email === user.email);
  if (existingUser) {
    existingUser.sockets.push(socket.id);
  } else {
    users.push({
      email: user.email,
      name: user.name,
      sockets: [socket.id],
    });
  }
  console.log(users);
  io.sockets.emit("users", users);

  socket.on("sendMessage", message => {
    // console.log(message);
    const sockets = users.find(person => person.email === message.to).sockets;
    sockets.map(socketId => {
      io.to(socketId).emit("receiveMessage", message);
      console.log("sent");
    });
  });
  socket.on("sendMessage", message => {
    const from = message.from;
    const to = message.to;

    if (!messages.hasOwnProperty(from)) {
      messages[from] = [message];
    } else {
      messages[from].push(message);
    }
    if (!messages.hasOwnProperty(to)) {
      messages[to] = [message];
    } else {
      messages[to].push(message);
    }
    console.log(messages);
    const senderSockets = users.find(person => person.email === message.from).sockets;
    senderSockets.map(socketId => {
      io.to(socketId).emit("setMessage", messages[from]);
    });
    const receiverSockets = users.find(person => person.email === message.to).sockets;
    receiverSockets.map(socketId => {
      io.to(socketId).emit("setMessage", messages[to]);
    });
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
    const userEmail = socket.handshake.auth.user.email;
    let disconnectedUser = users.find(person => person.email === userEmail);
    const socketsCount = disconnectedUser.sockets.length;
    if (socketsCount > 1) {
      const sockets = disconnectedUser.sockets;
      const updatedSockets = sockets.filter(socketId => socketId !== socket.id);
      disconnectedUser.sockets = updatedSockets;
    } else if (socketsCount === 1) {
      users = users.filter(person => person.email != userEmail);
    }

    console.log(users);
    socket.broadcast.emit("users", users);
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to Memories API");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    server.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
  )
  .catch(error => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
