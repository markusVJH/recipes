import React from 'react';
import axios from 'axios';

const Adding = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const recipe = {
      name: form.name.value,
      author: form.author.value,
      description: form.description.value,
      image: form.image.value,
      instructions: form.instructions.value,
      ingredients: [],
    };
    for (let i = 0; i < form.ingredientQuantity.length; i++) {
      const quantity = form.ingredientQuantity[i].value;
      const ingredient = form.ingredientName[i].value;
      if (quantity && ingredient) {
        recipe.ingredients.push(`${quantity} - ${ingredient}`);
      }
    }
    axios.post('http://localhost:4002/recipes', recipe)
      .then(response => {
        console.log(response.data);
        form.reset();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='fullpage'>
    <form className="form" onSubmit={handleSubmit}>
        <h2>Add a new recipe</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder='What is the name of the recipe?'/>
      <label htmlFor="author">Author</label>
      <input type="text" name="author" placeholder='Who made the recipe?'/>
      <label htmlFor="description">Description</label>
      <textarea name="description" placeholder='Describe the recipe :)'></textarea>
      <label htmlFor="image">Image</label>
      <input type="text" name="image" placeholder='You can add an url link to an image of the dish'/>
      <label htmlFor="ingredients">Ingredients</label>
      <div className="ingredients">
        <input type="text" name="ingredientName" placeholder="Ingredient" />
        <input type="text" name="ingredientQuantity" placeholder="Amount of this ingredient" />
        <button type="button" onClick={() => {
          const ingredientsDiv = document.querySelector('.ingredients');
          const quantityInput = document.createElement('input');
          quantityInput.type = 'text';
          quantityInput.name = 'ingredientQuantity';
          quantityInput.placeholder = 'Quantity';
          const nameInput = document.createElement('input');
          nameInput.type = 'text';
          nameInput.name = 'ingredientName';
          nameInput.placeholder = 'Ingredient';
          ingredientsDiv.appendChild(quantityInput);
          ingredientsDiv.appendChild(nameInput);
        }}>Add ingredient</button>
      </div>
      <label htmlFor="instructions">Instructions</label>
      <textarea name="instructions" placeholder='Add the actual instructions to make the awesome dish here :)'></textarea>
      <button type="submit">Add new recipe</button>
    </form>
    </div>
  );
};

export default Adding;