import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');
  const [numericFilters, setFilterByNumericValues] = useState({
    filterByNumericValues: [],
  });

  const planetsUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await fetch(planetsUrl).then((response) => response.json());
      setPlanets(results);
    }

    fetchPlanets();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    nameFilter,
    setNameFilter,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    numericFilters,
    setFilterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
