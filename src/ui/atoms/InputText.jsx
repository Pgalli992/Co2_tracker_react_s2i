function InputText({ label, disabled, className }) {
  return (
    <div
      className={`flex h-min flex-col rounded-lg border-[.5px] px-2 py-1 focus-within:scale-105 focus-within:border-[1px] focus-within:shadow-sm ${className}`}
    >
      <label htmlFor={label} className="w-min -translate-y-4 bg-white px-1">
        {label}
      </label>
      <input
        id={label}
        type="text"
        placeholder={label}
        className="-translate-y-1/2 pl-2 focus-within:outline-none focus:caret-black focus:placeholder:opacity-0"
        disabled={disabled}
      />
    </div>
  );
}

export default InputText;
