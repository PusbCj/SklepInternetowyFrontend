import {ShopCart} from './ShopCart.model';
import {Address} from './Address.model';


export class  Order {
  address?: Address;
  createDate?: Date;
  id?: number;
  deliveryType?: Order.DeliveryTypeEnum;
  orderStatus?: Order.OrderStatusEnum;
  shopCart?: ShopCart;
}
export namespace Order {
  export type DeliveryTypeEnum = 'DPU' | 'KI' | 'PP';
  export const DeliveryTypeEnum = {
    DPU: 'DPU' as DeliveryTypeEnum,
    KI: 'KI' as DeliveryTypeEnum,
    PP: 'PP' as DeliveryTypeEnum
  };
  export type OrderStatusEnum = 'CLOSE' | 'CREATE';
  export const OrderStatusEnum = {
    CLOSE: 'CLOSE' as OrderStatusEnum,
    CREATE: 'CREATE' as OrderStatusEnum
  };
}

