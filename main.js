const TEST_DATA = [
  [
    [ 1, 2 , 3, 4 ],
    [ 'Tyler', 'Brian', 'Pomeranz', 'Nayana' ],
    [
      [ 2 , 2 ],
      [ 5 , 4 ]
    ]
  ],
  [
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80 ],
    [ 'Banjo & Kazooie', 'Bayonetta', 'Bowser', 'Bowser Jr.', 'Captain Falcon', 'Charizard', 'Chrom', 'Cloud', 'Corrin', 'Daisy', 'Dark Pit', 'Dark Samus', 'Diddy Kong', 'Donkey Kong', 'Dr. Mario', 'Duck Hunt', 'Falco', 'Fox', 'Ganondorf', 'Greninja', 'Hero', 'Ice Climbers', 'Ike', 'Incineroar', 'Inkling', 'Isabelle', 'Ivysaur', 'Jigglypuff', 'Joker', 'Ken', 'King Dedede', 'King K. Rool', 'Kirby', 'Link', 'Little Mac', 'Lucario', 'Lucas', 'Lucina', 'Luigi', 'Mario', 'Marth', 'Mega Man', 'Meta Knight', 'Mewtwo', 'Mii Brawler', 'Mii Swordfighter', 'Mii Gunner', 'Mr. Game & Watch', 'Ness', 'Olimar', 'Pac-Man', 'Palutena', 'Peach', 'Pichu', 'Pikachu', 'Piranha Plant', 'Pit', 'Richter', 'Ridley', 'R.O.B.', 'Robin', 'Rosalina & Luma', 'Roy', 'Ryu', 'Samus', 'Sheik', 'Shulk', 'Simon', 'Snake', 'Sonic', 'Squirtle', 'Toon Link', 'Villager', 'Wario', 'Wii Fit Trainer', 'Wolf', 'Yoshi', 'Young Link', 'Zelda', 'Zero Suit Samus' ],
    [
      [ 1, 13],
      [ 2, 24],
      [ 3, 62],
      [ 4, 10],
      [ 5, 38],
      [ 6, 7],
      [ 7, 66],
      [ 8, 41],
      [ 9, 17],
      [ 1, 70],
      [ 2, 11],
      [ 3, 59],
      [ 4, 55],
      [ 5, 69],
      [ 6, 30],
      [ 7, 33],
      [ 8, 63],
      [ 9, 76],
      [ 1, 52],
      [ 2, 54],
      [ 3, 3],
      [ 4, 78],
      [ 5, 65],
      [ 6, 14],
      [ 7, 39],
      [ 8, 57],
      [ 9, 28],
      [ 1, 61],
      [ 2, 60],
      [ 3, 20],
      [ 4, 77],
      [ 5, 73],
      [ 6, 1],
      [ 7, 32],
      [ 8, 34],
      [ 9, 71],
      [ 7000, 8],
      [ 2, 48],
      [ 3, 80],
      [ 1, 21]
    ]
  ]
];

main();

function main() {
  let results;
  results = TEST_DATA.map(paramArr => {
    return musicalChairs(...paramArr);
  });
  console.log(results);
}

function musicalChairs(chairs, players, rounds) {
  
}
