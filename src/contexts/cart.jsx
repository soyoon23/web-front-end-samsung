import React, { useContext } from 'react';
import {arrayOf, oneOf, oneOfType, shape, string, number, func} from 'prop-types';

const CartContext = React.createContext();

export const CartProvider = ({ value, children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  title: string,
  products: oneOfType([
    oneOf([null]),
    arrayOf(
      shape({
        amount: number,
        id: string,
        maxAmount: number,
        name: string,
        photo: string,
        price: number,
      }),
    ),
  ]),
  total: number,
  handleUpdateAmount: func,
};

export const useCart = ()=>{
    const value = useContext(CartContext);
    if(!value){
        throw new Error(
            'useCart 혹은  CartProvider 컴포넌트 내부에서만 사용가능합니다'
        );
    }
    return value;
};