
const Bottle = ({bottle}) => {

    const {name, img, price} = bottle;
    console.log(bottle);

    return (
        <div>
            <h2>hello</h2>
            <p>Name: {name}</p>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;