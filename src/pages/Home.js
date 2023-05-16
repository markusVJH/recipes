import React from 'react';
import { Link } from 'react-router-dom';
import video from '../media/video.mp4'

const Home = () => {
    return (
        <div className='fullpage'>
            <div className='heroBanner'>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <h1>Super Recipes</h1>
                    <Link to={`/recipes`}>Browse recipes</Link>
                </div>
            </div>
            <div className='homelinks'>
              <div className='homebox'>
                <h3>Recipes</h3>
                <p>Check out all the recipes here. You can search them by name.</p>
                <Link to={`/recipes`}>All recipes</Link>
              </div>
              <div className='homebox'>
                <h3>Add new recipe</h3>
                <p>Want to add a new recipe? You can do so here :)</p>
                <Link to={`/adding`}>Add a new recipe</Link>
              </div>
              <div className='homebox'>
                <h3>Bored while food is getting ready?</h3>
                <p>Try our speed game to pass the time :)</p>
                <a target="blank" href='https://markusvjh.github.io/React_speed_game/'>Speed Game</a>
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