const TEST_DATA = [
  [
    [ 1, 2 , 3, 4 ],
    [ 'Tyler', 'Brian', 'Pomeranz', 'Nayana' ],
    [
      [ 2 , 2 ],
      [ 5 , 4 ]
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
