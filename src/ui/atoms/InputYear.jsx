function InputYear({ label, onChange, disabled, value, className = "" }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`flex gap-2 ${className}`}>
      <label htmlFor={label}>{label}:</label>
      <select
        id={label}
        name={label}
        onChange={onChange}
        disabled={disabled}
        value={value}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${disabled ? "cursor-not-allowed bg-gray-100" : "cursor-pointer bg-white"}`}
      >
        {[...Array(currentYear - 1990 + 1)].map((_, index) => {
          const yearValue = 1990 + index;
          return (
            <option key={yearValue} value={yearValue}>
              {yearValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputYear;
