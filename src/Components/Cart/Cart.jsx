import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <p>Cart: {cart.length}</p>
            <div className="cart-container">
                {
                    cart.map(bottle=> <img key={bottle.id} src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array.isRequired
}

export default Cart;