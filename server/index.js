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

io.on("connection", socket => {
  // console.log(socket.handshake.auth.user.name);
  console.log("connected");
  let users = [];
  for (let [id, socket] of io.of("/").sockets) {
    const user = socket.handshake.auth.user;
    users.push({
      userId: id,
      email: user.email,
      name: user.name,
    });
  }
  io.sockets.emit("users", users);

  socket.on("disconnect", () => {
    console.log("disconnected");
    users = users.filter(person => person.userId != socket.id);
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
