import si from "systeminformation";

//All systeminformation calls being made here and being exported

export async function getSystemInformation() {
  const cpuTemperature = await si.cpuTemperature();
  const cpuUsage = await si.currentLoad();
  const ramInformation = await si.mem();
  const disk = await si.fsSize()
  const diskUsedInPercentage = disk.find(d => d.mount === "/").use.toFixed(0)
  const totalDisk = (disk.find(d => d.mount === "/").size / 1024 ** 3).toFixed(0)

  
  return {
    cpuTemp: cpuTemperature.main,
    cpuUsage: Math.round(cpuUsage.currentLoad),
    totalRam: Math.round(ramInformation.total / 1024 ** 3),  //Data in bytes being converted to GB and Rounded off
    ramUsage: Math.round(ramInformation.active / 1024 ** 3),
    diskUsed: diskUsedInPercentage,
    totalDiskSize:totalDisk
  };
}

