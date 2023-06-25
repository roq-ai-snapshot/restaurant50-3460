const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  'menu-items': 'menu_item',
  orders: 'order',
  'order-items': 'order_item',
  restaurants: 'restaurant',
  'table-sections': 'table_section',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
