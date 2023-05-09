import { type Round } from '../../types';
import MatchComponent from '../match/MatchComponent';

interface RoundComponentProps {
  round: Round;
}

const RoundComponent: React.FC<{ round: Round }> = ({
  round,
}: RoundComponentProps) => (
  <div className="round">
    {round.matches.map((match) => (
      <MatchComponent key={match.id} match={match} />
    ))}
  </div>
);

export default RoundComponent;
