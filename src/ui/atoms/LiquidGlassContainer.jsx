function LiquidGlassContainer({ children }) {
  return (
    <div className="before:shadow-liquidglass relative flex overflow-y-auto rounded-[30px] border-[0.5px] border-white/5 p-4 before:absolute before:inset-0 before:z-0 before:overflow-hidden before:rounded-[30px] before:content-[''] after:absolute after:inset-0 after:isolate after:z-[-1] after:overflow-hidden after:rounded-[30px] after:[filter:url(#container-glass)] after:backdrop-blur-[0px] after:content-['']">
      {children}
    </div>
  );
}

export default LiquidGlassContainer;
