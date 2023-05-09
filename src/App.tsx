import BracketComponent from './components/bracket/BracketComponent';
import { sampleTournament } from './sampleData/tournamentSample1';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="container-fluid">
      <BracketComponent tournament={sampleTournament} />
    </div>
  );
}

export default App;
