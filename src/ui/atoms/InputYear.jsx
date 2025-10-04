function InputYear({ year, onChange, className = "" }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${className}`}>
      <label htmlFor="year">Year:</label>
      <select id="year" name="year" value={year} onChange={onChange}>
        {[...Array(currentYear - 1990 + 1)].map((_, index) => {
          const yearValue = 1990 + index;
          return (
            <option
              key={yearValue}
              value={yearValue}
              selected={yearValue === currentYear}
            >
              {yearValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputYear;
