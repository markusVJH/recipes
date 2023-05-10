import React from 'react';

const Adding = () => {
    return (
        <form className="form" action='submit'>
            <label for ="name">Name</label>
            <input type="text" name="name"></input>
            <label for ="author">Author</label>
            <input type="text" name="author"></input>
            <label for ="description">Description</label>
            <textarea name="description"></textarea>
            <label for ="image">Image</label>
            <input type="text" name="image"></input>
            <label for ="instructions">Instructions</label>
            <textarea name="instructions"></textarea>
            <button type="submit">Add new recipe</button>
        </form>
    );
};

export default Adding;