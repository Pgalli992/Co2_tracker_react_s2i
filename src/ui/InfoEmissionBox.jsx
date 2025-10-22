function InfoEmissionBox({ setIsOpen }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex h-full w-full items-center justify-center backdrop-blur-xs"
      onClick={handleClick}
    >
      <div className="relative inset-0 m-auto flex h-max w-[90%] flex-col space-y-6 overflow-y-auto rounded-lg bg-[#c8eafd] p-6 text-start text-xs shadow-lg lg:max-h-1/2 lg:max-w-2/5">
        <div>
          <h3 className="mb-2 text-lg font-semibold">
            About These Emission Values
          </h3>
          <p className="text-sm leading-relaxed">
            These values show the real-time carbon footprint of electricity
            production in each country, measured in grams of CO2 equivalent per
            kilowatt-hour (g CO2eq/kWh).
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">What does this number mean?</h4>
          <p className="text-sm leading-relaxed">
            The emission value represents how much CO2 is released to generate 1
            kWh of electricity at this moment. Lower values mean cleaner energy
            production.
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">How is it calculated?</h4>
          <p className="text-sm leading-relaxed">
            Nowtricity combines real-time production data from all active power
            sources (solar, wind, gas, coal, nuclear, etc.) with standardized
            emission factors for each energy type. The result is a weighted
            average that changes throughout the day based on which sources are
            currently generating electricity.
          </p>
        </div>
        <div className="w-full text-end">
          <span className="text-xs text-gray-500 italic">
            Data Source: Nowtricity (nowtricity.com)
          </span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 ml-4 size-5 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default InfoEmissionBox;
