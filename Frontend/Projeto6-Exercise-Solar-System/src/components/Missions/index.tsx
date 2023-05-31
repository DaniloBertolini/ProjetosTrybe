import Title from '../Title';
import MissionsLocais from '../../data/missions';
import MissionCard from '../MissionCard';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <div>
        {MissionsLocais.map((local) => {
          return (
            <MissionCard
              name={ local.name }
              year={ local.year }
              country={ local.country }
              destination={ local.destination }
              key={ local.name }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Missions;
