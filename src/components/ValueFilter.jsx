import React, { useContext } from 'react';
import StarwarsContext from '../contexts/PlanetsContext';

export default function ValueFilter() {
  const { valueFilter, setValueFilter } = useContext(StarwarsContext);

  const handleValue = ({ target: { value } }) => {
    setValueFilter(value);
  };

  return (
    <form>
      <input
        type="number"
        value={ valueFilter }
        data-testid="value-filter"
        onChange={ handleValue }
      />
    </form>
  );
}
