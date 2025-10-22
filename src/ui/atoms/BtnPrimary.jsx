function BtnPrimary({ children, className = "", disabled = false, onClick }) {
  return (
    <button
      className={`rounded-xl bg-blue-500 px-4 py-2 text-white shadow-sm transition duration-500 hover:scale-105 hover:bg-blue-600 hover:shadow-md active:scale-95 active:shadow-sm ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BtnPrimary;
