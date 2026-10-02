import { getSystemInformation } from "../utils/system.util.js";

//Test to make sure data arrives here
// console.log(await getSystemInformation())

export function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("getSystemInformation", async () => {
      const data = await getSystemInformation();
      socket.emit("system-info", data);
    });
  });
}
