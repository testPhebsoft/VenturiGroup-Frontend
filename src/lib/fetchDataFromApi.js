import { asynApiCall } from "./asyncApicall";

export async function fetchDataFromApi(requestConfig) {
  const res = (await asynApiCall(requestConfig)).promise;
  return res;
}
