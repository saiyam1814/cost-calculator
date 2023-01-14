import React, { ChangeEvent, useState } from "react";
import Select from "./ui/Select";

const countryOptions = ["USA", "India"];
const usaCities = ["New York", "Los Angeles", "Chicago", "Houston"];
const indiaCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad"];
const foodOptions :Partial<FoodoptionType> = {
  "New York": ["Pizza", "Hot Dogs", "Bagels"],
  "Los Angeles": ["Tacos", "Sushi", "Burgers"],
  Chicago: ["Pizza", "Hot Dogs", "Italian Beef"],
  Houston: ["Barbecue", "Tex-Mex", "Seafood"],
  Mumbai: ["Vada Pav", "Bhel Puri", "Samosa"],
  Delhi: ["Chole Bhature", "Aloo Tikki", "Samosa"],
  Bangalore: ["Idli", "Dosa", "Uttapam"],
  Hyderabad: ["Biryani", "Haleem", "Kebabs"],
};

type FormData = {
  selectedCountry: string;
  selectedCity: FoodOptionsCities;
  selectedFood: string;
};

type FoodoptionType = {
  [key in FoodOptionsCities]: string[];
};

type FoodOptionsCities = 'New York'| 'Los Angeles'| 'Chicago'| 'Houston'| 'Mumbai' | 'Delhi' | 'Bangalore' | 'Hyderabad' 

function MyForm() {
  const [formCount, setFormCount] = useState<number>(1);
  const [forms, setForms] = useState<FormData[]>([
    { selectedCountry: "", selectedCity: '', selectedFood: "" },
  ]);

  const handleCountryChange = (
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    let updatedForms = [...forms];
    updatedForms[index].selectedCountry = event.target.value;
    setForms(updatedForms);
  };

  const handleCityChange = (
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    let updatedForms = [...forms];
    updatedForms[index].selectedCity = event.target.value as FoodOptionsCities;
    setForms(updatedForms);
  };

  const handleFoodChange = (
    event: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    let updatedForms = [...forms];
    updatedForms[index].selectedFood = event.target.value;
    setForms(updatedForms);
  };

  const handleAddClick = () => {
    setFormCount(formCount + 1);
    setForms([
      ...forms,
      { selectedCountry: "USA", selectedCity: "New York", selectedFood: "" },
    ]);
  };

  const handleRemoveClick = (index: number) => {
    let updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
    setFormCount(formCount - 1);
  };

  const handleSubmit = () => {
    console.log(forms);
  };

  return (
    <>
      <div className="mx-10 py-4 grid grid-cols-2 gap-3">
        {[...Array(formCount)].map((e, i) => (
          <div key={`form-${i}`} className="border-2 rounded-lg p-2 ">
            <Select
              id="country"
              label="Select a country:"
              value={forms[i].selectedCountry}
              onChange={(event) => handleCountryChange(event, i)}
            >
              <option value="">Please select</option>
              {countryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Select
              id="city"
              label="Select a city:"
              disabled={forms[i].selectedCountry === ""}
              value={forms[i].selectedCity}
              onChange={(event) => handleCityChange(event, i)}
            >
              <option value="">Please select</option>
              {forms[i].selectedCountry === "USA"
                ? usaCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))
                : forms[i].selectedCountry === "India"
                ? indiaCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))
                : null}
            </Select>
            <Select
              id="food"
              label="Select food :"
              // disabled={forms[i].selectedCity === ""}
              value={forms[i].selectedFood}
              onChange={(event) => handleFoodChange(event, i)}
            >
              <option value="">Please Select</option>
              {foodOptions[forms[i].selectedCity] 
                ? foodOptions[forms?.[i]?.selectedCity].map((food) => (
                    <option key={food} value={food}>
                      {food}
                    </option>
                  ))
                : null}
            </Select>
            <button onClick={() => handleRemoveClick(i)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mx-10 p-2">
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default MyForm;
