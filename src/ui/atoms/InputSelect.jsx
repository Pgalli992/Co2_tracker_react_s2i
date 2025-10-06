function InputSelect({ label, onChange, className, options = [] }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        name={label}
        onChange={(e) => onChange(e.target.value)}
        className={`before:shadow-liquidglass relative z-0 cursor-pointer bg-transparent before:absolute before:inset-0 before:bg-[rgba(255,255,255,0.1)] before:content-[""] after:absolute after:inset-0 after:isolate after:z-[-1] after:overflow-hidden after:[filter:url(#container-glass)] after:backdrop-blur-[0px] after:content-[""] ${className}`}
      >
        <option value="Choose an option">Choose an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
