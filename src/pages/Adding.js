import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Adding = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all?fields=name')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const recipe = {
      name: form.name.value,
      author: form.author.value,
      description: form.description.value,
      image: form.image.value,
      instructions: [],
      ingredients: [],
      country: selectedCountry.name,
    };
    for (let i = 0; i < form.ingredientQuantity.length; i++) {
      const quantity = form.ingredientQuantity[i].value;
      const ingredient = form.ingredientName[i].value;
      if (quantity && ingredient) {
        recipe.ingredients.push(`${quantity} - ${ingredient}`);
      }
    }
    const stepFields = form.querySelectorAll('textarea[name^="step"]');
    stepFields.forEach((stepField) => {
      const stepValue = stepField.value;
      if (stepValue) {
        recipe.instructions.push(stepValue);
      }
    });
    axios.post('http://localhost:4002/recipes', recipe)
      .then(response => {
        console.log(response.data);
        form.reset();
      })
      .catch(error => {
        console.log(error);
      });
      alert(`Recipe ${form.name.value} added!`);
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
        
        <button type="button" onClick={() => {
            const ingredientsDiv = document.querySelector('.ingredients');
            const newIngredientContainer = document.createElement('div');
            newIngredientContainer.className = 'selectIngredient';
            const quantityInput = document.createElement('input');
            quantityInput.type = 'text';
            quantityInput.name = 'ingredientQuantity';
            quantityInput.placeholder = 'Amount';
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = 'ingredientName';
            nameInput.placeholder = 'Ingredient';
            newIngredientContainer.appendChild(quantityInput);
            newIngredientContainer.appendChild(nameInput);
            ingredientsDiv.appendChild(newIngredientContainer);
          }} >Add ingredient</button>
       <div className="ingredients-container">
    <div className="selectIngredient">
      <input type="text" name="ingredientQuantity" placeholder="Amount" required/>
      <input type="text" name="ingredientName" placeholder="Ingredient" className="name" required/>
    </div>
  </div>
      </div>
      <label htmlFor="instructions">Instructions</label>
<div className="steps-container">
  <div className="step">
    <textarea name="step1" placeholder="Step 1" required></textarea>
  </div>
</div>
<button type="button" onClick={() => {
  const stepsContainer = document.querySelector('.steps-container');
  const stepDiv = document.createElement('div');
  stepDiv.className = 'step';
  const textarea = document.createElement('textarea');
  const nextStepNumber = stepsContainer.children.length + 1;
  textarea.name = `step${nextStepNumber}`;
  textarea.placeholder = `Step ${nextStepNumber}`;
  textarea.required = true;
  stepDiv.appendChild(textarea);
  stepsContainer.appendChild(stepDiv);
}}>Add next step</button>
  <button type="submit">Add new recipe</button>
</form>
    </div>
  );
};

export default Adding;