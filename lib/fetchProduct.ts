export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    stock: number;
    createdAt: string;
  }
  

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
  