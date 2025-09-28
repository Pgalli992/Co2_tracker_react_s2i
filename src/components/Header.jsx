function Header({ children }) {
  return (
    <div className="before:content-[''] before:inset-0 before:z-0 before:overflow-hidden before:rounded-[30px] before:shadow-liquidglass after:content-[''] after:z-[-1] after:inset-0 after:rounded-[30px] after:backdrop-blur-[0px] after:overflow-hidden after:isolate flex items-center justify-center rounded-[30px] fixed w-[300px] h-[200px] before:absolute after:absolute after:[filter:url(#container-glass)] border-[0.5px] border-white/5">
      <h1 className="drop-shadow">{children}</h1>
    </div>
  );
}

export default Header;
