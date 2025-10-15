import { CloudSnow, Earth, FlagOff, HardDrive, Network } from "lucide-react";

function Legend({ className }) {
  return (
    <div
      className={`relative flex w-full items-center rounded-lg px-2 py-4 ${className}`}
    >
      <div className="absolute bottom-1/2 -rotate-90 transform">
        <span className="text-md font-extralight">Legend</span>
      </div>
      <div className="ml-20 flex w-full justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center">
            <CloudSnow size={20} color="green" />
            <span className="pl-2 text-sm"> = Below average emissions</span>
          </div>
          <div className="flex items-center">
            <CloudSnow size={20} color="red" />
            <span className="pl-2 text-sm"> = Above average emissions</span>
          </div>
          <div className="flex items-center">
            <CloudSnow size={20} />
            <span className="pl-2 text-sm"> = CO2 Emissions</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <HardDrive size={20} color="#0fda1c" />
            <span className="pl-2 text-sm"> = Cached data</span>
          </div>
          <div className="flex items-center">
            <Network size={20} color="#f6ce2f" />
            <span className="pl-2 text-sm">
              {" "}
              = Mixed source (cache + network)
            </span>
          </div>
          <div className="flex items-center">
            <Earth size={20} color="#f1730b" />
            <span className="pl-2 text-sm"> = Network data</span>
          </div>
          <div className="flex items-center">
            <FlagOff size={20} />
            <span className="pl-2 text-sm"> = No flag available</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legend;
