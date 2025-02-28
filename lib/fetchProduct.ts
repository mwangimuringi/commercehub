export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  createdAt: string;
}

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
