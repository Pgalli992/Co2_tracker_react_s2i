import { useEffect, useState } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainter";
import { useAppContext } from "../contexts/AppContext";
import useApiRequest from "../hooks/useApiRequest";
import { RingLoader } from "react-spinners";
import InfoEmissionBox from "./InfoEmissionBox";

function AppLayout() {
  const { globalMessage, globalError, clearMessage } = useAppContext();
  const { loading } = useApiRequest();

  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 3000);
    return () => clearTimeout(timer);
  }, [globalMessage, globalError, clearMessage]);

  return (
    <div className="bg-light mx-auto my-8 flex h-screen w-[95%] flex-col gap-4 overflow-y-auto px-4 caret-transparent lg:flex-row lg:overflow-hidden">
      <Sidebar className="h-[90%] flex-2 bg-white p-4" />
      <MainContent
        className="h-[90%] flex-3 lg:overflow-y-auto"
        infoOpen={infoOpen}
        setInfoOpen={setInfoOpen}
      />
      {(globalMessage || globalError) && (
        <MessageContainer
          message={globalMessage || null}
          messageError={globalError?.message || null}
          onClose={clearMessage}
        />
      )}
      {loading && (
        <div className="bg-aero-100/20 fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
          <RingLoader loading={loading} size={150} />
        </div>
      )}
      {infoOpen && <InfoEmissionBox setIsOpen={setInfoOpen} />}
    </div>
  );
}

export default AppLayout;
