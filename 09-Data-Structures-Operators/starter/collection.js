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
//challenge #1
//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk1, ...fieldPlayers] = players1;
console.log(
  `The goalkeeper is ${gk1}.\nThe remaining 10 field players are ${fieldPlayers}`
);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, draw, team2);

//6
const printGoals = (...players) => {
  console.log(`${players.length} were scored in total`);
  console.log(`${players}`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team1 is more likely to win');

team2 < team1 && console.log('Team2 is more likely to win');

//challenge #2

//1
const scored = [...game.scored];
for (const [i, key] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${key}`);
}

//2
const odd = Object.values(game.odds);
console.log(odd);
let average = 0;
for (const a of odd) average += a;
average /= odd.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const name = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${name}:${odd}`);
}

//challenge #3

const gameEvents = new Map([
  [17, '⚽Goal'],
  [36, '♾️Substitution'],
  [47, '⚽Goal'],
  [61, '♾️Substitution'],
  [64, '🟡Yellow card'],
  [69, '🔴Red card'],
  [70, '♾️Substitution'],
  [72, '♾️Substitution'],
  [76, '⚽Goal'],
  [80, '⚽Goal'],
  [92, '🟡Yellow card'],
]);
//1
const events = gameEvents.values();
console.log(new Set(events));

//2
gameEvents.delete(64);

//3
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened on average:${time / gameEvents.size}`);

//4
for (const [name, event] of gameEvents.entries()) {
  const half = name <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF]${name}:${event}`);
}
