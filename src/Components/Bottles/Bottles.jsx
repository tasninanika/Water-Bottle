import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";
const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=> res.json())
        .then(data=> setBottles(data));
    },[])


    // load cart from local storage
    useEffect(()=>{
        if(bottles.length){
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle =>bottle.id === id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart);

        }
    },[bottles])

    const handleAddToCart = bottle=>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id =>{
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);
    }

    return (
        <div>
            <h2>WATER BOTTLES</h2>
            <p>Bottles Available: {bottles.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
            {
                    bottles.map(bottle=>
                        <Bottle
                         key={bottle.id} 
                         bottle={bottle} 
                         handleAddToCart={handleAddToCart}></Bottle>
                    )
                }
            </div>
        </div>
    );
};

export default Bottles;