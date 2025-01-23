import './Bottle.css';
const Bottle = ({bottle}) => {

    const {name, img, price} = bottle;
    console.log(bottle);

    return (
        <div className='bottle'>
            <h2>hello</h2>
            <p>Name: {name}</p>
            <img src={img} alt="" className='img'/>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;