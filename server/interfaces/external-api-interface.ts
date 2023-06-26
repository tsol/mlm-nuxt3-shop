
import { Product, Category } from '../../interfaces/models';

export interface IExternalApi {
  getCategories: () => Promise<Category[] | null>;
  getProducts: () => Promise<Product[] | null>;
  getProduct: (productId: string) => Promise<Product | null>;
}
