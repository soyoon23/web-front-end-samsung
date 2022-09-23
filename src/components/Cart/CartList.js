import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';
import {useCart} from '../../contexts/cart';

export default function CartList() {
  const {products, handleUpdateAmount } =useCart();
  return (
    <Container>
      {products.map((product) => (
        <CartItem key={product.id} product={product} onUpdate={handleUpdateAmount} />
      ))}
      <CartFooter/>
    </Container>
  );
}

CartList.propTypes = {
  onUpdate: func,
};

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
