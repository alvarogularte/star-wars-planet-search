import React, { useContext } from 'react';
import StarwarsContext from '../contexts/PlanetsContext';

export default function ColumnFilter() {
  const { columnFilter, setColumnFilter } = useContext(StarwarsContext);

  const handleColumn = ({ target: { value } }) => {
    setColumnFilter(value);
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ handleColumn }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </form>
  );
}
