import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

export default function Table() {
  const { planets, nameFilter } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          {planets.length > 0
            && Object.keys(planets[0])
              .filter((key) => key !== 'residents')
              .map((key) => <th key={ key }>{key.replace(/_/, ' ')}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.length > 0 && planets
          .filter(({ name }) => name.includes(nameFilter))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
