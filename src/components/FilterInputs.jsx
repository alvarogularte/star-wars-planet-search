import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

export default function FilterInputs() {
  const { nameFilter, setNameFilter } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setNameFilter(value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Filter Planets"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ handleChange }
      />
    </form>
  );
}
