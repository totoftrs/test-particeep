/** @format */

import React from 'react';

const Select = ({ allCategories, choice, handleChangeChoice }) => {
  return (
    <select name='' id='' value={choice} onChange={handleChangeChoice}>
      {allCategories.map((category, index) => (
        <option key={index}>{category}</option>
      ))}
    </select>
  );
};

export default Select;
