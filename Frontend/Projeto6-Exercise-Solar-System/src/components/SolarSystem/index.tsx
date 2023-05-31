import Title from '../Title';
import PlanetCard from '../PlanetCard';
import Planets from '../../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <div>
        {Planets.map((planet) => {
          return (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          );
        })}
      </div>
    </div>
  );
}

export default SolarSystem;
