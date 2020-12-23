import {Category} from './Category.model';
import {PhotoUrl} from './PhotoUrl.models';
import {ProductCategoryAge} from './ProductCategoryAge';


export class Product {
  age?: number;
  brand?: string;
  category?: Category;
  description?: string;
  id?: number;
  name?: string;
  disabled?: boolean;
  photoUrl?: Array<PhotoUrl>;
  productCategoryAgeList?: Array<ProductCategoryAge>;
  quantity?: number;
  quantityAvailable?: number;
  price?: number;
}
