import { FeedbackInterface } from 'interfaces/feedback';
import { MenuItemInterface } from 'interfaces/menu-item';
import { TableSectionInterface } from 'interfaces/table-section';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  feedback?: FeedbackInterface[];
  menu_item?: MenuItemInterface[];
  table_section?: TableSectionInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
    menu_item?: number;
    table_section?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
