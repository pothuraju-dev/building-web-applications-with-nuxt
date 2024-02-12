
// Define interface for item object
interface CartItem {
  name: string;
  price: number;
}

export const useCartItems = () => useState<CartItem[]>('cartItems', () => []);
export const useColor = () => useState<string>('color', () => 'pink');
