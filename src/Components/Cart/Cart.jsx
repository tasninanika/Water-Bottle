import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <p>Cart: {cart.length}</p>
            <div className="cart-container">
                {
                    cart.map(bottle=> <img src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;