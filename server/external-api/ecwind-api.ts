import { Category, Product } from '../../interfaces/models';
import { IExternalApi } from '../interfaces/external-api-interface';
import * as Ecwind from './ecwind-interface';

function mapCategory(category: Ecwind.Category): Category {
  return {
    id: category.id,
    imageUrl: category.imageUrl,
    thumbnailUrl: category.thumbnailUrl,
    name: category.name,
    description: category.description,
    productCount: category.productCount,
  };
}

function mapProduct(product: Ecwind.Product): Product {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
    thumbnailUrl: product.thumbnailUrl,
    categoryIds: product.categoryIds,
  };
}

class ExternalApi implements IExternalApi {

  getCategories = async () => {
    const res = await this.getCategoriesExternal();
    if (! res) return null;
    return res.items.map(mapCategory);
  }

  getProducts = async () => {
    const res = await this.getProductsExternal();
    if (! res) return null;
    return res.items.map(mapProduct);
  }

  getProduct = async (id: string) => {
    const res = await this.getProductExternal(id);
    if (! res) return null;
    return mapProduct(res);
  }

  private getCategoriesExternal = () => this.fetchGet<Ecwind.CategoriesResponse>('categories');
  private getProductsExternal = () => this.fetchGet<Ecwind.ProductsResponse>('products');
  private getProductExternal = (id: string) => this.fetchGet<Ecwind.Product>(`products/${id}`);

  private headers: any;
  private baseUrl: string;
 
  private async fetchGet<T>(url: string) {
    try {
      const res = await fetch(this.baseUrl + url, { method: 'GET', headers: this.headers });

      if (! res.ok) {
        console.log('External_Fetch_Status:', url, res.status);
        return null;
      }

      const data: T = await res.json();
      return data;
    } catch (error) {
      console.log('External_Fetch_Error:', url, error);
      return null;
    }
  }

  constructor(storeId: string, storeToken: string) {
    this.baseUrl = `https://app.ecwid.com/api/v3/${storeId}/`;
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${storeToken}`,
    };
  }
}

export default ExternalApi;
