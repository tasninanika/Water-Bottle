import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <p>Cart: {cart.length}</p>
            <div className="cart-container">
                {
                    cart.map(bottle=>
                        <div key={bottle.id}>
                         <img key={bottle.id} src={bottle.img}></img>
                         <div>
                         <button className='cart-button' onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                         </div>
                         </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;