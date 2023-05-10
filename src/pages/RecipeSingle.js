import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import axios from 'axios';

const RecipeSingle = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    

    useEffect(() => {
        axios.get(`http://localhost:4002/recipes/${id}`)
          .then(response => {
            setRecipe(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, [id]);
      if (!recipe) {
        return <div>Loading...</div>;
      }
      
      return (
        <div>
          <h1>{recipe.name}</h1>
          <h2>{recipe.author}</h2>
          <p>{recipe.description}</p>
          <img src={recipe.image} alt={recipe.name} />
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <p>{recipe.instructions}</p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      );
};

export default RecipeSingle;