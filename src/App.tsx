import BracketComponent from './components/bracket/BracketComponent';
import { sampleTournament, sampleTournament2, sampleTournament3 } from './sampleData/tournamentSample1';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="container-fluid parent">
      <BracketComponent tournament={sampleTournament3} />
    </div>
  );
}

export default App;
