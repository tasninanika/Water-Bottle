
const Bottle = ({bottle}) => {

    const {name} = bottle;
    console.log(bottle);

    return (
        <div>
            <h2>hello</h2>
            <p>Name: {name}</p>
        </div>
    );
};

export default Bottle;