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
        {
          id: 3,
          team1: { id: 3, name: 'Team E' },
          team2: { id: 4, name: 'Team F' },
        },
        {
          id: 4,
          team1: { id: 3, name: 'Team G' },
          team2: { id: 4, name: 'Team H' },
        },
      ],
    },
    {
      id: 2,
      matches: [
        {
          id: 5,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 3, name: 'Team C' },
        },
        {
          id: 6,
          team1: { id: 1, name: 'Team E' },
          team2: { id: 3, name: 'Team G' },
        },
      ],
    },
    {
      id: 3,
      matches: [
        {
          id: 7,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 5, name: 'Team E' },
        },
      ],
    },
  ],
};

export const sampleTournament2: Tournament = {
  id: 2,
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
        {
          id: 3,
          team1: { id: 3, name: 'Team E' },
          team2: { id: 4, name: 'Team F' },
        },
        {
          id: 4,
          team1: { id: 3, name: 'Team G' },
          team2: { id: 4, name: 'Team H' },
        },
        {
          id: 5,
          team1: { id: 3, name: 'Team I' },
          team2: { id: 4, name: 'Team J' },
        },
        {
          id: 6,
          team1: { id: 3, name: 'Team K' },
          team2: { id: 4, name: 'Team L' },
        },
      ],
    },
    {
      id: 2,
      matches: [
        {
          id: 7,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 3, name: 'Team C' },
        },
        {
          id: 8,
          team1: { id: 1, name: 'Team E' },
          team2: { id: 3, name: 'Team G' },
        },
        {
          id: 9,
          team1: { id: 1, name: 'Team I' },
          team2: { id: 3, name: 'Team K' },
        },
      ],
    },
    {
      id: 3,
      matches: [
        {
          id: 10,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 5, name: 'Team E' },
        },
        {
          id: 11,
          team1: { id: 1, name: 'Team I' },
          team2: { id: 5, name: 'Team K' },
        },
      ],
    },
    {
      id: 4,
      matches: [
        {
          id: 12,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 6, name: 'Team F' },
        },
      ],
    },
  ],
};

// 16 TEAMS
export const sampleTournament3: Tournament = {
  id: 3,
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
        {
          id: 3,
          team1: { id: 5, name: 'Team E' },
          team2: { id: 6, name: 'Team F' },
        },
        {
          id: 4,
          team1: { id: 7, name: 'Team G' },
          team2: { id: 8, name: 'Team H' },
        },
        {
          id: 5,
          team1: { id: 9, name: 'Team I' },
          team2: { id: 10, name: 'Team J' },
        },
        {
          id: 6,
          team1: { id: 11, name: 'Team K' },
          team2: { id: 12, name: 'Team L' },
        },
        {
          id: 7,
          team1: { id: 13, name: 'Team M' },
          team2: { id: 14, name: 'Team N' },
        },
        {
          id: 8,
          team1: { id: 15, name: 'Team O' },
          team2: { id: 16, name: 'Team P' },
        },
      ],
    },
    {
      id: 2,
      matches: [
        {
          id: 9,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 2, name: 'Team B' },
        },
        {
          id: 10,
          team1: { id: 3, name: 'Team C' },
          team2: { id: 4, name: 'Team D' },
        },
        {
          id: 11,
          team1: { id: 5, name: 'Team E' },
          team2: { id: 6, name: 'Team F' },
        },
        {
          id: 12,
          team1: { id: 7, name: 'Team G' },
          team2: { id: 8, name: 'Team H' },
        },
      ],
    },
    {
      id: 3,
      matches: [
        {
          id: 13,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 2, name: 'Team B' },
        },
        {
          id: 14,
          team1: { id: 3, name: 'Team C' },
          team2: { id: 4, name: 'Team D' },
        },
      ],
    },
    {
      id: 4,
      matches: [
        {
          id: 15,
          team1: { id: 1, name: 'Team A' },
          team2: { id: 2, name: 'Team B' },
        },
      ],
    },
  ],
};
