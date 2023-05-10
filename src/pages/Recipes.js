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
        <div className='fullpage'>
        <div className='recipes'>
         {recipes.map(recipe => (
        <div key={recipe.id} className='recipe'>
            <h2>{recipe.name}</h2>
            <div className='imgcontainer'><img src={recipe.image} alt={recipe.name} /></div>
            <Link to={`/recipes/${recipe.id}`}>See more</Link>
        </div>
        
))}
        </div>
        </div>
      );
};

export default Recipes;