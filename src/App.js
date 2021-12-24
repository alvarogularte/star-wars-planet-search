import React from 'react';
import PlanetsProvider from './providers/PlanetsProvider';
import Header from './components/Header';
import Table from './components/Table';
import FilterInputs from './components/FilterInputs';
import ColumnFilter from './components/ColumnFilter';
import ComparisonFilter from './components/ComparisonFilter';
import ValueFilter from './components/ValueFilter';
import ButtonFilter from './components/ButtonFilter';
import './App.css';

// Utilizei esta PR como consulta para sanar dúvidas, não estava conseguindo fazer funcionar o código, sempre quebrava no npm start: https://github.com/tryber/sd-015-a-project-starwars-planets-search/pull/9

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <FilterInputs />
      <ColumnFilter />
      <ComparisonFilter />
      <ValueFilter />
      <ButtonFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
