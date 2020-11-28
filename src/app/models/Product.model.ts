import {Category} from './Category.model';


export class Product {
  category?: Category;
  description?: string;
  id?: number;
  name?: string;
  photoUrl?: string;
  quantity?: number;
  quantityAvailable?: number;
  price?: number;
}
