import { Category, Product } from '~/interfaces/models';
import { IApi } from './api-interface';

class Api implements IApi {
  getCategories = () => useFetch<Category[]>('/api/categories');
  getProduct = (id: number) => useFetch<Product>(`/api/products/${id}`);
  getProducts = (categoryId?: number) =>
    useFetch<Product[]>(categoryId ? `/api/category/${categoryId}/products` : '/api/products');
}

export default Api;
