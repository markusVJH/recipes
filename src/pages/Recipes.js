import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState({});
  

  useEffect(() => {
    axios.get('http://localhost:4002/recipes')
      .then(response => {
        setRecipes(response.data);
        const countryNames = new Set(response.data.map(recipe => recipe.country));
        const countryRequests = Array.from(countryNames).map(name => axios.get(`https://restcountries.com/v2/name/${name}?fields=name,flags`));
        axios.all(countryRequests)
          .then(responses => {
            const countries = {};
            responses.forEach(response => {
              countries[response.data[0].name] = response.data[0].flags.svg;
            });
            setCountries(countries);
          });
      })
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='fullpage'>
      <div className='recipespage'>
        <input
          className='searchbar'
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder='Search recipes by name'
        />
        <div className='recipes'>
          {filteredRecipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id} className='recipe'>
              
              <div className='flag'>
                <img src={countries[recipe.country]} alt={`${recipe.country} flag`} />
              </div>
                <p>{recipe.name}</p>
              <div className='mainCard'>
                <div className='imgcontainer'>
                  <img src={recipe.image} alt={recipe.name} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Recipes;
