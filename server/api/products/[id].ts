import useExternalApi from '../../services/external-api-service';

const notFound = (msg: string) => {
  throw createError({
    statusCode: 404,
    statusMessage: msg,
  });
};

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  if (!id) return notFound('id is required');

  const product = await useExternalApi().getProduct(id);
  if (!product) return notFound('product not found');

  return product;
});
