function InputRadio({ label, value, onChange, checked, className, children }) {
  return (
    <label
      key="country"
      className={`flex items-center gap-2 focus-within:placeholder:opacity-0 ${className}`}
    >
      <input
        type="radio"
        name={label}
        placeholder={label}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {children}
    </label>
  );
}

export default InputRadio;
