const InputRadioGroup = ({
  className = "",
  options = [],
  name = "",
  selectedValue,
  onChange = () => {},
}) => {
  if (options.length === 0) {
    return <div>Nessuna opzione disponibile</div>;
  }
  return (
    <div
      className={`radio-group flex flex-col gap-2 rounded-lg border-[.5px] ${className}`}
    >
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default InputRadioGroup;
