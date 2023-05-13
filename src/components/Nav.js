import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="header">
            <p className='logo'><NavLink to="/">Super Recipes!</NavLink></p>
        <nav className="nav">
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/recipes" activeClassName="active">Recipes</NavLink></li>
                <li><NavLink to="/adding" activeClassName="active">Add new recipe</NavLink></li>
            </ul>
        </nav>
        </div>
    );
};

export default Nav;