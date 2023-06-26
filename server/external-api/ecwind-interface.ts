export interface ImageWH {
  url: string;
  width: number;
  height: number;
};

export interface BorderInfo {
    dominatingColor: {
      red: number;
      green: number;
      blue: number;
      alpha: number;
    };
    homogeneity: boolean;
};

export interface Category {
  id: number;
  orderBy: number;
  hdThumbnailUrl: string;
  thumbnailUrl: string;
  originalImageUrl: string;
  imageUrl: string;
  originalImage: ImageWH;
  thumbnail: ImageWH;
  borderInfo: BorderInfo;
  name: string;
  nameTranslated: {
    ru: string;
  };
  url: string;
  productCount: number;
  description: string;
  descriptionTranslated: {
    ru: string;
  };
  enabled: boolean;
  isSampleCategory: boolean;
  seoTitle: string;
  seoDescription: string;
}

interface Paginated<T> {
  total: number;
  count: number;
  offset: number;
  limit: number;
  items: T[];
}

export type CategoriesResponse = Paginated<Category>;

export interface Product {
  id: number;
  sku: string;
  thumbnailUrl: string;
  unlimited: boolean;
  inStock: boolean;
  name: string;
  price: number;
  priceInProductList: number;
  defaultDisplayedPrice: number;
  defaultDisplayedPriceFormatted: string;
  tax: {
    taxable: boolean;
    defaultLocationIncludedTaxRate: number;
    enabledManualTaxes: any[];
    taxClassCode: string;
  };
  isShippingRequired: boolean;
  url: string;
  created: string;
  updated: string;
  createTimestamp: number;
  updateTimestamp: number;
  productClassId: number;
  enabled: boolean;
  options: {
    type: string;
    name: string;
    nameTranslated: {
      ru: string;
    };
    choices: {
      text: string;
      textTranslated: {
        ru: string;
      };
      priceModifier: number;
      priceModifierType: string;
    }[];
    defaultChoice: number;
    required: boolean;
  }[];
  fixedShippingRateOnly: boolean;
  fixedShippingRate: number;
  shipping: {
    type: string;
    methodMarkup: number;
    flatRate: number;
    disabledMethods: any[];
    enabledMethods: any[];
  };
  defaultCombinationId: number;
  imageUrl: string;
  smallThumbnailUrl: string;
  hdThumbnailUrl: string;
  originalImageUrl: string;
  originalImage: ImageWH;
  borderInfo: BorderInfo;
  description: string;
  galleryImages: {
    id: number;
    url: string;
    thumbnail: string;
    originalImageUrl: string;
    imageUrl: string;
    hdThumbnailUrl: string;
    thumbnailUrl: string;
    smallThumbnailUrl: string;
    width: number;
    height: number;
    orderBy: number;
    borderInfo: BorderInfo;
  }[];
  media: {
    images: {
      id: string;
      isMain: boolean;
      orderBy: number;
      image160pxUrl: string;
      image400pxUrl: string;
      image800pxUrl: string;
      image1500pxUrl: string;
      imageOriginalUrl: string;
    }[];
    videos: any[];
  };
  categoryIds: number[];
  categories: {
    id: number;
    enabled: boolean;
  }[];
  defaultCategoryId: number;
  seoTitle: string;
  seoDescription: string;
  attributes: any[];
  relatedProducts: {
    productIds: number[];
    relatedCategory: {
      enabled: boolean;
      categoryId: number;
      productCount: number;
    };
  };
  combinations: any[];
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  volume: number;
  showOnFrontpage: number;
  isSampleProduct: boolean;
  googleItemCondition: string;
  isGiftCard: boolean;
  discountsAllowed: boolean;
  nameYourPriceEnabled: boolean;
}

export type ProductsResponse = Paginated<Product>;