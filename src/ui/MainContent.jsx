import LiquidGlassContainer from "./atoms/LiquidGlassContainer";
import DataResponseComponent from "./DataResponseComponent";
import DataSettingComponent from "./DataSettingComponent";

function MainContent({ className }) {
  return (
    <div className={`flex-3 ${className}`}>
      <LiquidGlassContainer>
        <DataResponseComponent className="h-full" />
      </LiquidGlassContainer>
    </div>
  );
}

export default MainContent;
