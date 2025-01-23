import './Bottle.css';
const Bottle = ({bottle, handleAddToCart}) => {

    const {name, img, price} = bottle;
    console.log(bottle);

    return (
        <div className='bottle'>
            <p>{name}</p>
            <img src={img} alt="" className='img'/>
            <p>Price: ${price}</p>
            <button onClick={handleAddToCart}>Purchase</button>
        </div>
    );
};

export default Bottle;