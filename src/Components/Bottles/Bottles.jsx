import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=> res.json())
        .then(data=> setBottles(data));
    },[])

    return (
        <div>
            <h2>Bottles Length: {bottles.length}</h2>
            <h2>
                {
                    bottles.map(bottle=>
                        <Bottle key={bottle.id} bottle={bottle}></Bottle>
                    )
                }
            </h2>
        </div>
    );
};

export default Bottles;