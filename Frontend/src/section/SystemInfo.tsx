import SysInfoCard from "../components/SysInfoCard.tsx";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import type { sysInfoType } from "../types/sysInfoType";



const SystemInfo = () => {
  
  
  const [SystemInfoData, setSystemInfoData] = useState<sysInfoType>({
    cpuTemp: "",
    cpuUsage: "",
    totalRam: "", //Data in bytes being converted to GB and Rounded off
    ramUsage: "",
    diskUsed: "",
    totalDiskSize: "",
  });
  const timer = 5000;

  useEffect(() => {
    const socket = io(import.meta.env.VITE_LAPTOP_IP); //Backend links: Laptop IP on port 65000

    socket.on("system-info", (data) => {
      setSystemInfoData({
        cpuTemp: data.cpuTemp,
        cpuUsage: data.cpuUsage,
        totalRam: data.totalRam,
        ramUsage: data.ramUsage,
        diskUsed: data.diskUsed,
        totalDiskSize: data.totalDiskSize,
      });
    });

    const interval = setInterval(() => {
      socket.emit("getSystemInformation");
    }, timer);

    return () => {
      clearInterval(interval);
      socket.disconnect();
    };
  }, []);

  return (
    <section className="border h-full w-full flex flex-col gap-1">
      <SysInfoCard label={"Disk Usage"} data={SystemInfoData.diskUsed} />
      <SysInfoCard label={"Ram Usage"} data={SystemInfoData.ramUsage}/>
      <SysInfoCard label={"CPU Usage"} data={SystemInfoData.cpuUsage}/>
      <SysInfoCard label={"CPU temprature"} data={SystemInfoData.cpuTemp}/>
      <SysInfoCard label={"GPU temprature"} data={"TBA"}/>
    </section>
  );
};

export default SystemInfo;
