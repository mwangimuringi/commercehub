export async function fetchProducts() {
    const response = await fetch("/api/products");
    return response.json();
  }
  