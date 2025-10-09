import useApiRequest from "../hooks/useApiRequest";

import ResponseContent from "./atoms/ResponseContent";

function DataResponseComponent() {
  const { data } = useApiRequest();
  console.log("Data in DataResponseComponent:", data);

  return (
    <div className="relative flex w-full items-center justify-center">
      {data && <ResponseContent data={data} />}
    </div>
  );
}

export default DataResponseComponent;
