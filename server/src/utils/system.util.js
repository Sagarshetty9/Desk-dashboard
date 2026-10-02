import si, { networkConnections } from "systeminformation";

//All systeminformation calls being made here and being exported

export async function getSystemInformation() {
  const cpuTemperature = await si.cpuTemperature();
  const cpuUsage = await si.currentLoad();
  const ramInformation = await si.mem();
  const disk = await si.fsSize();
  const diskUsedInPercentage = disk.find((d) => d.mount === "/").use.toFixed(0);
  const totalDisk = (
    disk.find((d) => d.mount === "/").size /
    1024 ** 3
  ).toFixed(0);

  //Uptime Calulated date, hour and mins 
  const upTimeInSeconds = si.time().uptime;
  const days = Math.floor(upTimeInSeconds / 86400);
  const hours = Math.floor((upTimeInSeconds % 86400) / 3600);
  const mins = Math.floor((upTimeInSeconds % 3600) / 60);

  const uptime = `${days}d ${hours}h ${mins}m`;
  const netStats = await si.networkStats();

  return {
    cpuTemp: cpuTemperature.main + "°C",
    cpuUsage: Math.round(cpuUsage.currentLoad) + "%",
    totalRam: Math.round(ramInformation.total / 1024 ** 3) + "GB", //Data in bytes being converted to GB and Rounded off
    ramUsage: Math.round(ramInformation.active / 1024 ** 3) + "GB",
    diskUsed: diskUsedInPercentage + "%",
    totalDiskSize: totalDisk + "GB",
    uptime: uptime,
    downloadSpeed: netStats[0].rx_sec,
    uploadSpeed: netStats[0].tx_sec,
  };
}

// async function testing() {

//   setInterval(async () => {
//     const netStats = await si.networkStats();
//     console.log(netStats[0].tx_sec, netStats[0].rx_sec);
//   }, 3000);
// }

// testing();
