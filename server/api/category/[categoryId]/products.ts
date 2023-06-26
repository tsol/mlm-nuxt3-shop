import useExternalApi from "../../../services/external-api-service";

export default defineEventHandler(async (event) => {
  const products = await useExternalApi().getProducts();

  const categoryId = parseInt(event.context.params?.categoryId as string);
  if (!categoryId) { throw new Error('categoryId is required'); }

  return products?.filter((product) => 
    product.categoryIds.includes(categoryId));
    
});

