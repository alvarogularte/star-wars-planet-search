import React from 'react';
import PlanetsProvider from './providers/PlanetsProvider';
import Table from './components/Table';
import './App.css';

// Utilizei esta PR como consulta para sanar dúvidas, não estava conseguindo fazer funcionar o código, sempre quebrava no npm start: https://github.com/tryber/sd-015-a-project-starwars-planets-search/pull/9

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
