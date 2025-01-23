import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=> res.json())
        .then(data=> setBottles(data));
    },[])


    const handleAddToCart = bottle=>{
        console.log('bottle added')
    }

    return (
        <div>
            <h2>BOTTLES</h2>
            <p>Total Bottle: {bottles.length}</p>
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