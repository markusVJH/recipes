import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="header">
            <p className='logo'><NavLink to="/">Super Recipes!</NavLink></p>
        <nav className="nav">
            <ul>
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/recipes" activeclassname="active">Recipes</NavLink></li>
                <li><NavLink to="/adding" activeclassname="active">Add new recipe</NavLink></li>
            </ul>
        </nav>
        </div>
    );
};

export default Nav;