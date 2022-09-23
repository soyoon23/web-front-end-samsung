import { number } from 'prop-types';
import CartTotal from './CartTotal';
import { useCart } from '../../contexts/cart'

const CartFooter = ({ ...restProps }) => {
  const {total} = useCart();
  <footer {...restProps}>
    <CartTotal>{total}</CartTotal>
  </footer>
};

CartFooter.propTypes = {
  total: number.isRequired,
};

export default CartFooter;
