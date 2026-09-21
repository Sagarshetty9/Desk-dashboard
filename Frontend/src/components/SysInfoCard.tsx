import type { SysInfoCardProps } from "../types/SysInfoCardProps.ts";

function SysInfoCard({ label, data }: SysInfoCardProps) {
  return (
    <>
      <div className="border h-[20%] flex flex-col justify-between font-semibold p-2">
        <div className="flex justify-between">
          <h1> &gt;- {label}</h1>
          <p> {data}</p>
        </div>
        <h1>███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</h1>
      </div>
        
    </>
  );
}

export default SysInfoCard;
