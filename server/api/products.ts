import useExternalApi from "../services/external-api-service";

export default defineEventHandler(async (event) => {
  return useExternalApi().getProducts();
});

