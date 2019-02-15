import { CartItem } from './cart-item.model'
import { MenuItem } from '../menu-item/menu-item.model'

export class ShoppingCartService {
  cartItems: CartItem[] = []

  clear() {
    this.cartItems = []
  }

  addItem(item: MenuItem){
    let foundItem = this.cartItems.find((mItem) => mItem.menuItem.id === item.id)
    if(foundItem){
      foundItem.quantity += 1
    } else {
      this.cartItems.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem){
    this.cartItems.splice(this.cartItems.indexOf(item), 1)
  }

  total(): number {
    return this.cartItems
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }
}
