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
    <div className={`radio-group ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="radio-input"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default InputRadioGroup;
