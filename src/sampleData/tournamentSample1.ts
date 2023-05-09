import { type Tournament } from '../types';

export const sampleTournament: Tournament = {
  id: 1,
  rounds: [
    {
      id: 1,
      matches: [
        {
          id: 1,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 2, name: 'Team B' },
        },
        {
          id: 2,
          team1: { id: 3, name: 'Team C' },
          team2: { id: 4, name: 'Team D' },
        },
      ],
    },
    {
      id: 2,
      matches: [
        {
          id: 3,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 3, name: 'Team C' },
        },
      ],
    },
    {
      id: 3,
      matches: [
        {
          id: 4,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 5, name: 'Team E' },
        },
      ],
    },
  ],
};
