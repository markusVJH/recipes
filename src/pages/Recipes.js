import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4002/recipes')
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='fullpage'>
      <input
        className='searchbar'
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder='Search recipes by name'
      />
      <div className='recipes'>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className='recipe'>
            <h2>{recipe.name}</h2>
            <div className='imgcontainer'>
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <Link to={`/recipes/${recipe.id}`}>See more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
