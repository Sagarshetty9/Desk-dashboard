import { getSystemInformation } from "../utils/system.util.js";

//Test to make sure data arrives here
// console.log(await getSystemInformation())

// async function testing() {
//   setInterval(async () => {
//     const netStats = await getSystemInformation();
//     console.log(netStats);
//   }, 3000);
// }

// testing();


export function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("getSystemInformation", async () => {
      const data = await getSystemInformation();
      socket.emit("system-info", data);
    });
  });
}
