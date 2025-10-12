import useApiRequest from "../hooks/useApiRequest";
import MessageContainer from "./MessageContainter";

import ResponseContent from "./ResponseContent";

function DataResponseComponent() {
  const { data, error } = useApiRequest();

  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="relative flex w-full items-center justify-center">
        {error ? (
          <MessageContainer message={`Errore: ${error.message}`} />
        ) : data ? (
          <ResponseContent data={data} />
        ) : (
          <MessageContainer message={"Imposta i criteri di ricerca"} />
        )}
      </div>
    </div>
  );
}

export default DataResponseComponent;
