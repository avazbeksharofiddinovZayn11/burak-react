import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/

export interface AppRootState {
  homepage: HomePageState;
}

/** HOME PAGE **/

export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCT PAGE **/

/** ORDER PAGE **/

