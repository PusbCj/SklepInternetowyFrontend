import {ItemShopCart} from './ItemShopCar.model';


export class ShopCart {
  cartStatus?: ShopCart.CartStatusEnum;

  id?: number;
  itemShopCartList?: Array<ItemShopCart>;
}
export namespace ShopCart {
  export type CartStatusEnum = 'CLOSE' | 'START';
  export const CartStatusEnum = {
    CLOSE: 'CLOSE' as CartStatusEnum,
    START: 'START' as CartStatusEnum
  };
}
