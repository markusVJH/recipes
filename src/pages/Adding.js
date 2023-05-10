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
        };
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
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor ="name">Name</label>
            <input type="text" name="name"></input>
            <label htmlFor ="author">Author</label>
            <input type="text" name="author"></input>
            <label htmlFor ="description">Description</label>
            <textarea name="description"></textarea>
            <label htmlFor ="image">Image</label>
            <input type="text" name="image"></input>
            <label htmlFor ="instructions">Instructions</label>
            <textarea name="instructions"></textarea>
            <button type="submit">Add new recipe</button>
        </form>
    );
};

export default Adding;