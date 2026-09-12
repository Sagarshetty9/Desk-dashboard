import type { SysInfoCardProps } from "../types/SysInfoCardProps.ts";

function SysInfoCard({ label, data }: SysInfoCardProps) {
  return (
    <>
      <div className="border h-[20%] flex justify-between font-semibold">
        <h1> &gt; {label}</h1>
        <p className=" "> {data}</p>
      </div>
    </>
  );
}

export default SysInfoCard;
