import { useEffect } from "react";
import { useState } from "react";

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
        </div>
    );
};

export default Bottles;