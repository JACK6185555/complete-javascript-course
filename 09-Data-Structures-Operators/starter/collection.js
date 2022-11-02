const odds = {
  team1: 1.33,
  draw: 3.25,
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
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Bruki',
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
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th,2037',
  odds,
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [goalkeeper, ...other_players] = players1;
console.log(`Team1(Goalkeeper):${goalkeeper} \nOther_Players:${other_players}`);

const [goalkeeper_2, ...other_players_2] = players2;
console.log(
  `Team2(Goalkeeper): ${goalkeeper_2} \nOther_Players:${other_players_2}`
);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
var players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(
    `Scored players:[${players}]\nNumber of scored player:${players.length}`
  );
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
