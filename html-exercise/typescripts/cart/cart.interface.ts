import { ProductProps } from "../product/product.interface";

export default interface CartItemProps extends Omit<ProductProps, 'status'> {
  quantity: number
}
