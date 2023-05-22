import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../store/slices/CartSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const total = useSelector(state => state.cart.total);

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {Array.isArray(cartItems) && cartItems.map((item) => (
                    <li key={item.product}>
                        <span>{item.name}</span>
                        <span>{item.qty} x {item.price}$</span>
                        <button onClick={() => handleRemove(item.product)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                Total: €{total}
            </div>

            <button onClick={handleClearCart}>Clear Cart</button>

        </div>

    )
};