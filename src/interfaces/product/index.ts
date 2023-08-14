import { CartInterface } from 'interfaces/cart';
import { OrderInterface } from 'interfaces/order';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  business_id: string;
  created_at?: any;
  updated_at?: any;
  cart?: CartInterface[];
  order?: OrderInterface[];
  business?: BusinessInterface;
  _count?: {
    cart?: number;
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  business_id?: string;
}
