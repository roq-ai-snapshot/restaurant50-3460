import { OrderInterface } from 'interfaces/order';
import { RestaurantInterface } from 'interfaces/restaurant';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TableSectionInterface {
  id?: string;
  name: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  wait_staff_id?: string;
  order?: OrderInterface[];
  restaurant?: RestaurantInterface;
  user?: UserInterface;
  _count?: {
    order?: number;
  };
}

export interface TableSectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  restaurant_id?: string;
  wait_staff_id?: string;
}
