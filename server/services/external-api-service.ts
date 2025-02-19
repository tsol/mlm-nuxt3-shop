import ExternalApi from "../external-api/ecwind-api";
import { FakeShopApi } from "../external-api/fakeshop-api";
import { IExternalApi } from "../interfaces/external-api-interface";

let externalApi: IExternalApi | null = null;

export default function useExternalApi(): IExternalApi {

  if (!externalApi) {
    const { storeId, storeToken } = useRuntimeConfig();
    // externalApi = new ExternalApi(storeId, storeToken);
    externalApi = new FakeShopApi();

  }
  return externalApi;
}
