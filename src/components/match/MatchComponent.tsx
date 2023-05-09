import TeamComponent from '../team/TeamComponent';
import { type Match } from '../../types';

interface MatchComponentProps {
  match: Match;
}

const MatchComponent: React.FC<{ match: Match }> = ({
  match,
}: MatchComponentProps) => (
  <div className="match">
    <TeamComponent team={match.team1} />
    <TeamComponent team={match.team2} />
  </div>
);

export default MatchComponent;
