export interface Team {
  id: number;
  name: string;
}

export interface Match {
  id: number;
  team1: Team;
  team2: Team;
}

export interface Round {
  id: number;
  matches: Match[];
}

export interface Tournament {
  id: number;
  rounds: Round[];
}
