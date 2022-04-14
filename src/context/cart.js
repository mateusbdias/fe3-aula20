import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [productsCart, setProductsCart] = useState([]);

    function addProductToCart(id) {
        const copyProductsCart = [...productsCart];

        const item = copyProductsCart.filter((product) => product.id === id);

        if(item.length > 0) {
            item[0].qtd = item[0].qtd + 1;
        } else {
            copyProductsCart.push({ id: id, qtd: 1 });
        }

        setProductsCart(copyProductsCart);
    }

    function removeProductFromCart(id) {
        const copyProductsCart = [...productsCart];

        const item = copyProductsCart.filter((product) => product.id === id);

        if(item.length > 0){
            if(item[0].qtd > 1) {
                item[0].qtd = item[0].qtd - 1;
            } else if(item[0].qtd === 1) {
                copyProductsCart.pop(item[0]);
            }
        } else {
            alert("O produto não está no carrinho");
        }
        setProductsCart(copyProductsCart);
    }
    
    return (
        <CartContext.Provider value={{ productsCart, addProductToCart, removeProductFromCart }}>
            {children}
        </CartContext.Provider>
    );
}