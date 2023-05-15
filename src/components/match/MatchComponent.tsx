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
    <svg
      className="match-line"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="50" x2="100" y2="50" stroke="#fff" strokeWidth="2" />
    </svg>
  </div>
);

export default MatchComponent;
