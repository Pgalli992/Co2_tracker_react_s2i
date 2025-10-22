import {
  CalendarOff,
  CloudSnow,
  Earth,
  FlagOff,
  HardDrive,
  Info,
  InfoIcon,
  Network,
} from "lucide-react";

function Legend({ className, setInfoOpen, infoOpen }) {
  return (
    <div
      className={`relative flex w-full flex-col items-center gap-3 rounded-lg px-2 py-4 pb-15 sm:flex-row sm:gap-0 sm:pb-5 lg:translate-y-2/13 sm:@lg:translate-0 ${className}`}
    >
      <div className="transform sm:-rotate-90 lg:absolute lg:bottom-1/2 lg:translate-y-2/3">
        <span className="text-md font-extralight">Legend</span>
      </div>
      <div className="mx-auto flex w-full flex-col justify-center gap-5 sm:flex-row sm:items-start lg:ml-10 2xl:ml-20 2xl:gap-10">
        <div className="flex flex-1 items-center justify-center sm:translate-y-5/6">
          <button onClick={() => setInfoOpen(!infoOpen)}>
            <Info
              className="cursor-pointer duration-200 hover:scale-125"
              size={40}
            />
          </button>
        </div>
        <div className="text-md flex flex-2 flex-col items-start gap-2 lg:text-sm">
          <div className="flex items-center">
            <CloudSnow size={20} color="green" />
            <span className="pl-2"> = Below average emissions</span>
          </div>
          <div className="flex items-center">
            <CloudSnow size={20} color="red" />
            <span className="pl-2"> = Above average emissions</span>
          </div>
          <div className="flex items-center">
            <CloudSnow size={20} />
            <span className="pl-2"> = CO2 Emissions</span>
          </div>
          <div className="flex items-center">
            <CalendarOff size={20} color="red" />
            <span className="pl-2"> = Outdated data</span>
          </div>
        </div>
        <div className="text-md flex flex-2 flex-col items-start gap-2 sm:translate-0 lg:text-sm @min-xs:translate-x-1/2 @min-xs:-translate-y-[120%]">
          <div className="flex items-center">
            <HardDrive size={20} color="#0fda1c" />
            <span className="pl-2"> = Cached data</span>
          </div>
          <div className="flex items-center">
            <Network size={20} color="#f6ce2f" />
            <span className="pl-2"> = Mixed source (cache + network)</span>
          </div>
          <div className="flex items-center">
            <Earth size={20} color="#f1730b" />
            <span className="pl-2"> = Network data</span>
          </div>
          <div className="flex items-center">
            <FlagOff size={20} />
            <span className="pl-2"> = No flag available</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legend;
