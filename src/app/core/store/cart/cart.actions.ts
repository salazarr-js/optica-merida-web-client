import { Product } from '@models/product';

/** GET/REQUEST PRODUCTS WITH DETAILS FROM API */
export class GetDetailedProducts {
  public static readonly type = '[Cart] Get Detailed Products';
}

/** SET/SAVE PRODUCTS WITH DETAILS TO CART STATE */
export class SetDetailedProducts {
  public static readonly type = '[Cart] Set Detailed Products';
  constructor(public detailedProducts: Product[]) {}
}

/** ADD PRODUCT ID TO CART STATE */
export class AddProduct {
  public static readonly type = '[Cart] Add Product';
  constructor(public id: number) {}
}

/** SUBSTRACT PRODUCT ID TO CART STATE */
export class SubstractProduct {
  public static readonly type = '[Cart] Substract Product';
  constructor(public id: number) {}
}


/** REMOVE PRODUCT ID FROM CART STATE */
export class RemoveProduct {
  public static readonly type = '[Cart] Remove Product';
  constructor(public id: number) {}
}

/** BUY ALL PRODUCTS IN CART STATE */
export class BuyProducts {
  public static readonly type = '[Cart] Buy Products';
}
