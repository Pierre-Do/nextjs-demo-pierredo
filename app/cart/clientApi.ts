export interface CartItem {
  id: string;
  quantity: number;
  description: string;
}

export interface Cart {
  id: string;
  cart_items: CartItem[];
}

function responseToCart(response: Response): Promise<Cart> {
  return response.json();
}

export async function getCart(): Promise<Cart> {
  const response = await fetch('/cart', {
    method: 'GET',
  });
  return responseToCart(response);
}

export async function setQuantity(): Promise<Cart> {
  const response = await fetch('/cart', {
    method: 'POST',
  });
  return responseToCart(response);
}
