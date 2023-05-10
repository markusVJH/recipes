import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="header">
            <p className='logo'>Super Recipes</p>
        <nav className="nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/recipes">Recipes</NavLink></li>
                <li><NavLink to="/adding">Add new recipe</NavLink></li>
            </ul>
        </nav>
        </div>
    );
};

export default Nav;