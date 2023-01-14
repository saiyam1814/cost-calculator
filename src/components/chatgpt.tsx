import React from 'react'

const Chatgpt = () => {
  return (
    <div>Chatgpt</div>
  )
}

export default Chatgpt
// import React, { ChangeEvent, useState } from "react";

// const countryOptions = ["USA", "India"];
// const usaCities = ["New York", "Los Angeles", "Chicago", "Houston"];
// const indiaCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad"];
// const foodOptions = {
//   "New York": ["Pizza", "Hot Dogs", "Bagels"],
//   "Los Angeles": ["Tacos", "Sushi", "Burgers"],
//   Chicago: ["Pizza", "Hot Dogs", "Italian Beef"],
//   Houston: ["Barbecue", "Tex-Mex", "Seafood"],
//   Mumbai: ["Vada Pav", "Bhel Puri", "Samosa"],
//   Delhi: ["Chole Bhature", "Aloo Tikki", "Samosa"],
//   Bangalore: ["Idli", "Dosa", "Uttapam"],
//   Hyderabad: ["Biryani", "Haleem", "Kebabs"],
// };

// function MyForm() {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");
//   const [cityFoods, setCityFoods] = useState([]);
//   const [formCount, setFormCount] = useState(1);
//   const [forms, setForms] = useState([
//     { selectedCountry: "", selectedCity: "", selectedFood: "" },
//   ]);

//   const handleCountryChange = (event, index) => {
//     setSelectedCountry(event.target.value);
//     if (event.target.value === "USA") {
//       setCities(usaCities);
//     } else if (event.target.value === "India") {
//       setCities(indiaCities);
//     } else {
//       setCities([]);
//     }
//     setSelectedCity("");
//     setCityFoods([]);
//     let updatedForms = [...forms];
//     updatedForms[index].selectedCountry = event.target.value;
//     setForms(updatedForms);
//   };

//   const handleCityChange = (event : ChangeEvent, index :number) => {
//     setSelectedCity(event.target.value);
//     setCityFoods(foodOptions[event.target.value] || []);
//     let updatedForms = [...forms];
//     updatedForms[index].selectedCity = event.target.value;
//     setForms(updatedForms);
//   };

//   const handleFoodChange = (event : ChangeEvent, index :number) => {
//     let updatedForms = [...forms];
//     updatedForms[index].selectedFood = event.target.value;
//     setForms(updatedForms);
//   };

//   const handleAddClick = () => {
//     setFormCount(formCount + 1);
//     setForms([
//       ...forms,
//       { selectedCountry: "", selectedCity: "", selectedFood: "" },
//     ]);
//   };

//   const handleSubmit = () => {
//     console.log(forms);
//   };

//   return (
//     <div>
//       {[...Array(formCount)].map((e, i) => (
//         <div key={i}>
//           <label>
//             Select a country:
//             <select
//               value={selectedCountry}
//               onChange={(event) => handleCountryChange(event, i)}
//             >
//               <option value="">Please select</option>
//               {countryOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <br />
//           <label>
//             Select a city:
//             <select
//               disabled={cities.length === 0}
//               value={selectedCity}
//               onChange={(event) => handleCityChange(event, i)}
//             >
//               <option value="">Please select</option>
//               {cities.map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <br />
//           <label>
//             Select food:
//             <select
//               disabled={cityFoods.length === 0}
//               onChange={(event) => handleFoodChange(event, i)}
//             >
//               {cityFoods.map((food) => (
//                 <option key={food} value={food}>
//                   {food}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//       ))}
//       <br />
//       <button onClick={handleAddClick}>Add</button>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default MyForm;
