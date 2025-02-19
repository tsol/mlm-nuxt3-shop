import { Category, Product } from "../../interfaces/models";
import { IExternalApi } from "../interfaces/external-api-interface";

export class FakeShopApi implements IExternalApi {
  private readonly baseUrl = 'https://fakestoreapi.com';
  private categoryCache: Map<string, number> = new Map();

  private async fetchJson<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }
    return response.json();
  }

  private generateCategoryId(categoryName: string): number {
    if (this.categoryCache.has(categoryName)) {
      return this.categoryCache.get(categoryName)!;
    }
    const id = this.categoryCache.size + 1;
    this.categoryCache.set(categoryName, id);
    return id;
  }

  private createThumbnailUrl(imageUrl: string): string {
    // In a real implementation, you might want to use a proper thumbnail service
    // For now, we'll just return the same URL
    return imageUrl;
  }

  async getCategories(): Promise<Category[] | null> {
    try {
      const categories = await this.fetchJson<string[]>('/products/categories');
      const products = await this.getProducts();
      
      return categories.map(categoryName => {
        const id = this.generateCategoryId(categoryName);
        const categoryProducts = products?.filter(p => p.categoryIds.includes(id)) || [];
        
        return {
          id,
          name: categoryName,
          description: `Collection of ${categoryName}`,
          imageUrl: categoryProducts[0]?.imageUrl || '',
          thumbnailUrl: categoryProducts[0]?.thumbnailUrl || '',
          productCount: categoryProducts.length
        };
      });
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      return null;
    }
  }

  async getProducts(): Promise<Product[] | null> {
    try {
      interface FakeStoreProduct {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
      }

      const products = await this.fetchJson<FakeStoreProduct[]>('/products');
      
      return products.map(product => ({
        id: product.id,
        name: product.title,
        description: product.description,
        price: product.price,
        imageUrl: product.image,
        thumbnailUrl: this.createThumbnailUrl(product.image),
        categoryIds: [this.generateCategoryId(product.category)]
      }));
    } catch (error) {
      console.error('Failed to fetch products:', error);
      return null;
    }
  }

  async getProduct(productId: string): Promise<Product | null> {
    try {
      interface FakeStoreProduct {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
      }

      const product = await this.fetchJson<FakeStoreProduct>(`/products/${productId}`);
      
      return {
        id: product.id,
        name: product.title,
        description: product.description,
        price: product.price,
        imageUrl: product.image,
        thumbnailUrl: this.createThumbnailUrl(product.image),
        categoryIds: [this.generateCategoryId(product.category)]
      };
    } catch (error) {
      console.error(`Failed to fetch product ${productId}:`, error);
      return null;
    }
  }
}