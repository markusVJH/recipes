import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('http://localhost:4002/recipes')
      .then(response => {
        setRecipes(response.data);
        const countryNames = new Set(response.data.map(recipe => recipe.country)); // storing unique country names in a set
        const countryRequests = Array.from(countryNames).map(name => axios.get(`https://restcountries.com/v2/name/${name}?fields=name,flags`)); // converting the set of country names into an array
        axios.all(countryRequests)
          .then(responses => {
            responses.forEach(flagresponse => {
              countries[flagresponse.data[0].name] = flagresponse.data[0].flags.svg; // iterating over each response in the array, taking the name and flag and adding them to 'countries' object
            });
            setCountries(countries);
            setLoading(false);
          });
      })
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              <div className='mainCard'>
                <div className='imgcontainer'>
                  <div className='innerContainer'>
                    <img src={recipe.image} alt={recipe.name} />
                  </div>
                </div>
                <p>{recipe.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Recipes;
