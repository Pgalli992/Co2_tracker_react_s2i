import useApiRequest from "../hooks/useApiRequest";
import MessageContainer from "./MessageContainter";

import ResponseContent from "./ResponseContent";

function DataResponseComponent({ className }) {
  const { data } = useApiRequest();

  return (
    <div
      className={`relative flex w-full items-start justify-center ${className}`}
    >
      <div className="relative flex w-full items-center justify-center">
        {data ? <ResponseContent data={data} /> : null}
      </div>
    </div>
  );
}

export default DataResponseComponent;
