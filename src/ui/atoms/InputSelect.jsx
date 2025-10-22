function InputSelect({
  label,
  onChange,
  disabled,
  className,
  options = [],
  value,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="w-min -translate-y-4 bg-white px-1">
        {label}
      </label>
      <select
        id={label}
        name={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`-translate-y-1/2 cursor-pointer bg-transparent text-sm focus-within:outline-none ${className}`}
        disabled={disabled}
      >
        <option value="">Choose an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-sm">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
