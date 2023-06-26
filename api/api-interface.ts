import { Category, Product } from "~/interfaces/models";

type ApiResult<T> = ReturnType<typeof useFetch<T>>;

export interface IApi {
  getCategories: () => ApiResult<Category[]>;
  getProducts: (categoryId?: number) => ApiResult<Product[]>;
  getProduct(id: number): ApiResult<Product | null>;
}
