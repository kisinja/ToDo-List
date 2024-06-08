import { useState } from "react";


const MyComponent = () => {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    const handleRemoveCar = (index) => {
        const newCars = cars.filter((_, i) => i !== index); // filter out the car at the given index. We use an underscore to indicate that we don't care about the value at that index.(car)
        setCars(newCars);
    }
    const handleYearChange = (event) => {
        setCarYear(event.target.value);
    }
    const handleMakeChange = (event) => {
        setCarMake(event.target.value);
    }
    const handleModelChange = (event) => {
        setCarModel(event.target.value);
    }


    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>
            <input type="number" value={carYear} placeholder="Year" id="yearInput" onChange={handleYearChange} /><br />
            <input type="text" value={carMake} placeholder="Make" id="makeInput" onChange={handleMakeChange} /><br />
            <input type="text" value={carModel} placeholder="Model" id="modelInput" onChange={handleModelChange} /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}

export default MyComponent