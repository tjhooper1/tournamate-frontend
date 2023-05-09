import { type Team } from '../../types';

interface TeamComponentProps {
  team: Team;
}

const TeamComponent: React.FC<{ team: Team }> = ({
  team,
}: TeamComponentProps) => <div className="team">{team.name}</div>;

export default TeamComponent;
