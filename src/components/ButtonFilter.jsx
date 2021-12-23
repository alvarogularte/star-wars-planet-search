import React, { useContext } from 'react';
import StarwarsContext from '../contexts/PlanetsContext';

export default function ButtonFilter() {
  const {
    columnFilter,
    comparisonFilter,
    valueFilter,
    numericFilters: { filterByNumericValues },
    setFilterByNumericValues,
    columnsOptions,
    setColumnsOptions,
  } = useContext(StarwarsContext);

  const handleClick = () => {
    setFilterByNumericValues({
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
  };

  setColumnsOptions(
    columnsOptions.filter((option) => option !== columnFilter),
  );

  return (
    <button type="button" data-testid="button-filter" onClick={ handleClick }>
      Filtrar
    </button>
  );
}
