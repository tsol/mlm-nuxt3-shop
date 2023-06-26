export interface Category {
  id: number,
  imageUrl: string,
  thumbnailUrl: string,
  name: string,
  description: string,
  productCount: number
}

export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  thumbnailUrl: string,
  categoryIds: number[]
}

