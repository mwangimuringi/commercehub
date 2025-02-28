// src/lib/fetchProducts.ts
export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    stock: number;
    createdAt: string;
  }
  
  /**
   * Fetch all products from the API
   */
  export async function fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
  
  /**
   * Fetch a single product by ID
   */
  export async function fetchProductById(productId: string): Promise<Product> {
    try {
      const response = await fetch(`/api/products/${productId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      throw error;
    }
  }
  