import useExternalApi from "../services/external-api-service";

export default defineEventHandler(async (event) => {
  // throw new Error('Not implemented');
  return useExternalApi().getCategories();
});

