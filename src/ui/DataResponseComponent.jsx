import useApiRequest from "../hooks/useApiRequest";
import MessageContainer from "./atoms/MessageContainter";

import ResponseContent from "./atoms/ResponseContent";

function DataResponseComponent() {
  const { data, error } = useApiRequest();
  console.log("Data in DataResponseComponent:", data, error);

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
