import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Adding = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [ingredientInputs, setIngredientInputs] = useState([{ quantity: '', name: '' }]);
  const [stepInputs, setStepInputs] = useState([{ value: '' }]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all?fields=name')
      .then(response => {
        setCountries(response.data);
      })
  }, []);
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredientInputs];
    newIngredients[index][field] = value;
    setIngredientInputs(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredientInputs([...ingredientInputs, { quantity: '', name: '' }]);
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...stepInputs];
    newSteps[index].value = value;
    setStepInputs(newSteps);
  };

  const handleAddStep = () => {
    setStepInputs([...stepInputs, { value: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    alert(`Recipe ${form.name.value} added!`);
    const recipe = {
      name: form.name.value,
      author: form.author.value,
      description: form.description.value,
      image: form.image.value,
      instructions: stepInputs.map(step => step.value).filter(value => value),
      ingredients: ingredientInputs
        .filter(ingredient => ingredient.quantity && ingredient.name)
        .map(ingredient => `${ingredient.quantity} - ${ingredient.name}`),
      country: selectedCountry.name,
    };
    axios.post('http://localhost:4002/recipes', recipe)
      .then(() => {
        form.reset();
      })
  };

  return (
    <div className='fullpage'>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add a new recipe</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder='What is the name of the recipe?' required/>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" placeholder='Who made the recipe?'/>
        <label htmlFor="description">Description</label>
        <textarea name="description" placeholder='Describe the recipe :)'></textarea>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" placeholder='You can add an url link to an image of the dish'/>
        <label htmlFor="country" required>Country</label>
        <select name="country" value={selectedCountry ? selectedCountry.name : ''} onChange={(event) => setSelectedCountry(countries.find(country => country.name === event.target.value))} required>
          <option value="" disabled defaultValue>Where is the recipe from? :)</option>
          {countries.map(country => (
          <option key={country.name} value={country.name}>{country.name}</option>
        ))}
        </select>
        <label htmlFor="ingredients">Ingredients</label>
        <div className="ingredients">
          {ingredientInputs.map((ingredient, index) => (
            <div className="selectIngredient" key={index}>
              <input
                type="text"
                name="ingredientQuantity"
                placeholder="Amount"
                value={ingredient.quantity}
                onChange={(event) =>
                  handleIngredientChange(index, 'quantity', event.target.value)
                }
                required
              />
              <input
                type="text"
                name="ingredientName"
                placeholder="Ingredient"
                value={ingredient.name}
                onChange={(event) =>
                  handleIngredientChange(index, 'name', event.target.value)
                }
                required
              />
            </div>
          ))}
        </div>
        <button type="button" onClick={handleAddIngredient}>
          Add ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
            <div className="steps-container">
          {stepInputs.map((step, index) => (
            <div className="step" key={index}>
              <textarea
                name={`step${index + 1}`}
                placeholder={`Step ${index + 1}`}
                value={step.value}
                onChange={(event) => handleStepChange(index, event.target.value)}
                required
              ></textarea>
            </div>
          ))}
        </div>
        <button type="button" onClick={handleAddStep}>
          Add next step
        </button>
          <button type="submit">Add new recipe</button>
      </form>
    </div>
  );
};

export default Adding;