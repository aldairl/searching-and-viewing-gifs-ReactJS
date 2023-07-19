import React, { useState } from "react";

import PropTypes from 'prop-types';

export const AddCategry = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const category = inputValue.trim();
    if (category.length <= 1) return;

    onNewCategory(category);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form" >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategry.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}