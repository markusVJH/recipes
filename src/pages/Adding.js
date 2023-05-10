import React from 'react';
import axios from 'axios';

const Adding = () => {
    return (
        <form className="form" action='submit'>
            <label htmlFor ="name">Name</label>
            <input type="text" name="name"></input>
            <label htmlFor ="author">Author</label>
            <input type="text" name="author"></input>
            <label htmlFor ="description">Description</label>
            <textarea name="description"></textarea>
            <label htmlFor ="image">Image</label>
            <input type="text" name="image"></input>
            <label htmlFor ="instructions">Instructions</label>
            <textarea name="instructions"></textarea>
            <button type="submit">Add new recipe</button>
        </form>
    );
};

export default Adding;