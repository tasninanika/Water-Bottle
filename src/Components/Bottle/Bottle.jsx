import './Bottle.css';
const Bottle = ({bottle}) => {

    const {name, img, price} = bottle;
    console.log(bottle);

    return (
        <div className='bottle'>
            <p>{name}</p>
            <img src={img} alt="" className='img'/>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;