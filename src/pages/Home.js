import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='fullpage'>
            <div className='heroBanner'>
                <h1>Super Recipes</h1>
                <p>Welcome to Super Recipes!! :) This is a Business College Helsinki project</p>
                <Link to={`/recipes`}>Browse recipes</Link>
            </div>
            <div className='homelinks'>
            <div className='homebox'>
            <h3>Recipes</h3>
            <p>Check out all the recipes here. You can search them by recipe name or country of origin.</p>
            <Link to={`/recipes`}>All recipes</Link>
            </div>
            <div className='homebox'>
            <h3>Add new recipe</h3>
            <p>Want to add a new recipe? You can do so here :)</p>
            <Link to={`/adding`}>Add a new recipe</Link>
            </div>
            <div className='homebox'>
            <h3>Want to know more about our projects?</h3>
            <p>Visit our school's <a target="blank" href='https://en.bc.fi/'>homepage</a></p>
            </div>
            </div>
        </div>
    );
};

export default Home;