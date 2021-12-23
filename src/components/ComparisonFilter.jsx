import React, { useContext } from 'react';
import StarwarsContext from '../contexts/PlanetsContext';

export default function ComparisonFilter() {
  const { comparisonFilter, setComparisonFilter } = useContext(StarwarsContext);

  const handleComparison = ({ target: { value } }) => {
    setComparisonFilter(value);
  };

  return (
    <form>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ handleComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </form>
  );
}
