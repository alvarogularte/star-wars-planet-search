import React, { useContext } from 'react';
import StarwarsContext from '../contexts/PlanetsContext';

export default function ColumnFilter() {
  const { columnFilter, setColumnFilter, columnsOptions } = useContext(StarwarsContext);

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
        {columnsOptions.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
}
