import React from 'react';
import { useState } from 'react';
import './carsell.css';


const CarSellForm = () => {
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('');
  const [features, setFeatures] = useState('');
  const [transmission, setTransmission] = useState('');
  const [priceRange, setPriceRange] = useState(0);
  const [contactNumber, setContactNumber] = useState('');
  const [carMakeError, setErrorCarMake] = useState('');
  const [carModelError, setErrorCarModel] = useState('');
  const [yearError, setErrorYear] = useState('');
  const [mileageError, setErrorMileage] = useState('');
  const [conditionError, setErrorCondition] = useState('');
  const [featuresError, setErrorFeatures] = useState('');
  const [transmissionError, setErrorTransmission] = useState('');
  const [priceRangeError, setErrorPriceRange] = useState('');
  const [contactNumberError, setErrorContactNumber] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'carMake') {
      setCarMake(value);
    } else if (name === 'carModel') {
      setCarModel(value);
    } else if (name === 'year') {
      setYear(value);
    } else if (name === 'mileage') {
      setMileage(value);
    } else if (name === 'contactNumber') {
      setContactNumber(value);
    }
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFeatures([...features, value]);
    } else {
      setFeatures(features.filter((feature) => feature !== value));
    }
  };

  const handleTransmissionChange = (event) => {
    setTransmission(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (carMake === ""){
      setErrorCarMake("This field is required")
    }else{
      setErrorCarMake("")
    };
    
    if (carModel === ""){
      setErrorCarModel("This field is required")
    }else{
      setErrorCarModel("")
    }

    if (year === ""){
        setErrorYear("This field is required")
    }else{
        setErrorYear("")
    }

    if (mileage === ""){
      setErrorMileage("This field is required")
  }else{
      setErrorMileage("")
  }

  if (condition === ""){
    setErrorCondition("This field is required")
  }else{
    setErrorCondition("")
}

  if (contactNumber === ""){
    setErrorContactNumber("This field is required")
  }else{
    setErrorContactNumber("")
}

  if (features === ""){
  setErrorFeatures("This field is required")
  }else{
  setErrorFeatures("")
}

  if (transmission === ""){
  setErrorTransmission("This field is required")
  }else{
  setErrorTransmission("")
}

  if (priceRange === ""){
  setErrorPriceRange("This field is required")
  }else{
  setErrorPriceRange("")
}

    const formData = {
      carMake,
      carModel,
      year,
      mileage,
      condition,
      features,
      transmission,
      priceRange,
      contactNumber,
    };

    console.log(formData);

  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
      <h1>Car Sell Form</h1>
      <div className="container">
        <div>
          <label>Car Make: </label>
          <input type="text" name="carMake" value={carMake} onChange={handleInputChange} /><br />{carMakeError}
        </div>

        <div>
          <label>Car Model: </label>
          <input type="text" name="carModel" value={carModel} onChange={handleInputChange} /><br />{carModelError}
        </div>

        <div>
          <label>Year: </label>
          <input type="date" name="year" value={year} onChange={handleInputChange} /><br />{yearError}
        </div>

        <div>
          <label>Mileage: </label>
          <input type="number" name="mileage" value={mileage} onChange={handleInputChange} /><br />{mileageError}
        </div>

        <div>
          <label>Condition: </label>{conditionError}
          <div>
            <input
              type="radio"
              name="condition"
              value="Excellent"
              checked={condition === 'Excellent'}
              onChange={handleConditionChange}
            
            />
            <span>Excellent</span>
          </div>
          <div>
            <input
              type="radio"
              name="condition"
              value="Good"
              checked={condition === 'Good'}
              onChange={handleConditionChange}
            />
            <span>Good</span>
          </div>
          <div>
            <input
              type="radio"
              name="condition"
              value="Fair"
              checked={condition === 'Fair'}
              onChange={handleConditionChange}
            />
            <span>Fair</span>
          </div>
          <div>
            <input
              type="radio"
              name="condition"
              value="Poor"
              checked={condition === 'Poor'}
              onChange={handleConditionChange}
            />
            <span>Poor</span>
          </div>
        </div>

        <div>
          <label>Features: </label>{featuresError}
          <div>
            <input
              type="checkbox"
              name="features"
              value="Air Conditioning"
              checked={features.includes('Air Conditioning')}
              onChange={handleFeatureChange}
            
            />
            <span>Air Conditioning</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="features"
              value="Power Steering"
              checked={features.includes('Power Steering')}
              onChange={handleFeatureChange}
            />
            <span>Power Steering</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="features"
              value="Power Windows"
              checked={features.includes('Power Windows')}
              onChange={handleFeatureChange}
            />
            <span>Power Windows</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="features"
              value="ABS"
              checked={features.includes('ABS')}
              onChange={handleFeatureChange}
            />
            <span>ABS</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="features"
              value="Navigation system"
              checked={features.includes('Navigation system')}
              onChange={handleFeatureChange}
            />
            <span>Navigation system</span>
          </div>
        </div>
        <div>
            <label for="Transmission">Transmission: </label>
            <select name="Transmission" value={transmission} onChange={handleTransmissionChange}>
                <option value="">Choose</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
            </select><br />{transmissionError}
        </div>
        <div>
          <span>Price Range: </span>
          <input
            type="range"
            name="priceRange"
            min="0"
            max="10000000"
            step="1000"
            onChange={handlePriceRangeChange}
          />{priceRangeError}
        </div>
        <div>
          <label>Contact Number: </label>
          <input type="text" name="contactNumber" value={contactNumber} onChange={handleInputChange} /><br />{contactNumberError}
        </div>
        <div className='btn'>
        <button type="submit" onChange={handleSubmit}>Submit</button>
        </div>
        </div>
      </form>
    </div>

  );
  }


export default CarSellForm;

