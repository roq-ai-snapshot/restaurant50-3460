import { OrderItemInterface } from 'interfaces/order-item';
import { UserInterface } from 'interfaces/user';
import { TableSectionInterface } from 'interfaces/table-section';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id: string;
  wait_staff_id: string;
  table_section_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  user_order_customer_idTouser?: UserInterface;
  user_order_wait_staff_idTouser?: UserInterface;
  table_section?: TableSectionInterface;
  _count?: {
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  wait_staff_id?: string;
  table_section_id?: string;
  status?: string;
}
