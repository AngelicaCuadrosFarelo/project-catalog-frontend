const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts(queryParams) {
  const params = new URLSearchParams(queryParams).toString();
  const response = await fetch(`${API_URL}/product?${params}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function getProduct(id) {
  const response = await fetch(`${API_URL}/product/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.data;
}
