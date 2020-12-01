import {Category} from './Category.model';
import {PhotoUrl} from './PhotoUrl.models';


export class Product {
  age?: number;
  brand?: string;
  category?: Category;
  description?: string;
  id?: number;
  name?: string;
  photoUrl?: Array<PhotoUrl>;
  quantity?: number;
  quantityAvailable?: number;
  price?: number;
}
