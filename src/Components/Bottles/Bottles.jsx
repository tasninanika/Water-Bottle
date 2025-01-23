import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoredCart } from "../../Utilities/localStorage";
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
        if(bottles.length > 0){
            const storedCart = getStoredCart();
        }
    },[bottles])

    const handleAddToCart = bottle=>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h2>WATER BOTTLES</h2>
            <p>Bottles Available: {bottles.length}</p>
            <p>Cart: {cart.length}</p>
            <div className="bottle-container">
            {
                    bottles.map(bottle=>
                        <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>
                    )
                }
            </div>
        </div>
    );
};

export default Bottles;