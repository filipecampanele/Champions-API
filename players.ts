import { PlayerModel } from "../models/player-model";

// "Banco de dados" em memória
export const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Right Winger",
    statistics: { overall: 93, pace: 80, shooting: 88, passing: 91, dribbling: 95, defending: 40, physical: 65 },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Striker",
    statistics: { overall: 91, pace: 82, shooting: 93, passing: 80, dribbling: 85, defending: 35, physical: 77 },
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    nationality: "France",
    position: "Striker",
    statistics: { overall: 91, pace: 97, shooting: 90, passing: 80, dribbling: 92, defending: 36, physical: 77 },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: { overall: 91, pace: 74, shooting: 86, passing: 93, dribbling: 87, defending: 64, physical: 78 },
  },
  {
    id: 5,
    name: "Vinícius Júnior",
    club: "Real Madrid",
    nationality: "Brazil",
    position: "Left Winger",
    statistics: { overall: 90, pace: 95, shooting: 82, passing: 80, dribbling: 94, defending: 29, physical: 68 },
  },
];
