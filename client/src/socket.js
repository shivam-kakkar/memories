import io from "socket.io-client";
const URL = "http://localhost:5000";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
  autoConnect: false,
};

const socket = io.connect(URL, connectionOptions);

export default socket;
