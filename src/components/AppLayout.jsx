import CountrySelector from "./CountrySelector";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-screen overflow-hidden caret-transparent bg-light flex items-center justify-center">
      <Header>
        <CountrySelector />
      </Header>
    </div>
  );
}

export default AppLayout;
