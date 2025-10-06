import useApiRequest from "../hooks/useApiRequest";

import ResponseContent from "./atoms/ResponseContent";

function DataResponseComponent() {
  const { data, searchHistory } = useApiRequest();

  // const co2Data = (request) ? searchHistory ;

  return <div>{data && <ResponseContent data={data} />}</div>;
}

export default DataResponseComponent;
