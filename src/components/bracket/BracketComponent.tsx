import RoundComponent from '../round/RoundComponent';
import { type Tournament } from '../../types';

interface BracketComponentProps {
  tournament: Tournament;
}

const Bracket: React.FC<{ tournament: Tournament }> = ({
  tournament,
}: BracketComponentProps) => (
  <div className="bracket">
    {tournament.rounds.map((round) => (
      <RoundComponent key={round.id} round={round} />
    ))}
  </div>
);

export default Bracket;
