import app from "./app.js";
import { createServer } from 'http'
import { Server } from "socket.io";
import { initSocket } from './src/config/socket.config.js'


const server = createServer(app)
const io = new Server(server, {
  cors: {origin:'http://localhost:3000'}
})

const PORT = 5000;

initSocket(io)

server.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});
