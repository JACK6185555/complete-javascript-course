const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnardy', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th , 2037',
  odds,
};
//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, draw, team2);

//6
const scored = [...game.scored];
console.log(scored);

const printGoals = function (...players) {
  console.log(`${players.length} were scored in total `);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...scored);

//7
team1 < team2 && console.log(`team1 more likely to win`);
team2 < team1 && console.log(`team2 is more likely to win`);

//challenge #2

//1
for (const [i, players] of scored.entries()) {
  console.log(`Goal ${i + 1}:${players}`);
}

//2

let average = 0;
const odd = Object.values(game.odds);
for (const abc of odd) average += abc;
average /= odd.length;
console.log(average);

//3
const odd3 = Object.entries(game.odds);
for (const [team, odd] of odd3) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}:${odd}`);
}

//4 Bonus
const scores = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
