import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
            <img src={recipe.image} alt={recipe.name} />
            <Link to={`/recipes/${recipe.id}`}>See more</Link>
        </div>
))}
        </div>
      );
};

export default Recipes;