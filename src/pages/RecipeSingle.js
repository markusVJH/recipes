import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import axios from 'axios';

const RecipeSingle = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [countryFlag, setCountryFlag] = useState('');

    

    useEffect(() => {
      axios.get(`http://localhost:4002/recipes/${id}`)
        .then(response => {
          setRecipe(response.data);
          axios.get(`https://restcountries.com/v2/name/${response.data.country}?fields=flags`)
            .then(countryResponse => {
              setCountryFlag(countryResponse.data[0].flags.svg);
            })
        })
    }, [id]);
  
    if (!recipe) {
      return <div>Loading...</div>;
    }
      return (
        <div className='fullpage single'>
          <div className='tophalf'>
            <div className='imgcontainerSingle'><img src={recipe.image} alt={recipe.name} /></div>
            <button onClick={() => navigate(-1)} className="backButton">⬅ Back to recipes</button>
              <div className='info'>
                <div className='title'>
                <img src={countryFlag} alt={`${recipe.country} flag`} className='singleflag'/>
                <h1>{recipe.name}</h1> 
                </div>
                <h2>By: {recipe.author}</h2>
                <p>{recipe.description}</p>
              </div>
          </div>
          <div className='bottomhalf'>
            <div className='ingredients'>
              <h2>Ingredients</h2>
              <ul className='list'>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                  ))}
              </ul>
            </div>
            <div className='instructions'>
              <h2>Instructions</h2>
              <ul className='list inst'>
              {recipe.instructions.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      );
};

export default RecipeSingle;