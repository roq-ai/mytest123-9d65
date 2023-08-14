const mapping: Record<string, string> = {
  businesses: 'business',
  carts: 'cart',
  orders: 'order',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
