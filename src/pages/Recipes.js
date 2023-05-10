import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4002/recipes')
          .then(response => {
            setRecipes(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      return (
        <div>
          {recipes.map(recipe => (
            <div key={recipe.id}>
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <img src={recipe.image} alt={recipe.name} />
            </div>
          ))}
        </div>
      );
};

export default Recipes;