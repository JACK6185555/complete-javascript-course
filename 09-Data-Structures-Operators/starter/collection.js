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
//challenge 1
//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

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
const printGoals = (...players) => {
  console.log(`${players.length} players were scored in total`);
};
printGoals(...game.scored);

//7
console.log(`Team 1 is more likely to win`) || team1 < team2;
team2 < team1 && console.log(`Team 2 is more likely to win`);

//challenge 2
//1
for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${players}`);
}

//2
let sum = 0;
for (const a of Object.values(game.odds)) sum += a;
sum /= 3;
console.log(sum);

//3
for (const [team, score] of Object.entries(game.odds)) {
  const Name = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${Name}:${score}`);
}
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
