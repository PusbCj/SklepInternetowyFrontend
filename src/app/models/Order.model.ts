import {ShopCart} from './ShopCart.model';
import {Address} from './Address.model';


export class  Order {
  address?: Address;
  createDate?: Date;
  id?: number;
  orderStatus?: Order.OrderStatusEnum;
  shopCart?: ShopCart;
}
export namespace Order {
  export type OrderStatusEnum = 'CLOSE' | 'CREATE';
  export const OrderStatusEnum = {
    CLOSE: 'CLOSE' as OrderStatusEnum,
    CREATE: 'CREATE' as OrderStatusEnum
  };
}
