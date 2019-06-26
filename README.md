# Musical Chairs
## Problem
Given starting values: 
* `chairs: integer[]` - number of chairs to start with
* `players: string[]` - list of people playing the game
* `rounds[integer, integer]` - array of tuples of form `[ time, chair ]`
  * `chair` represents the chair that will need to be removed.

With contraints:
* `chairCount === players.length` at the beginning of each round

## Rules of the Game

Each round is played one at a time. the `time` value indicates how long the music plays. 

Time decrements until it reaches 0 (the music stops playing). Each timeevery time the `time` is decremented, the players rotate one position in the circle.

When the `time` hits 0, the specified chair is removed from the `chairs` array, and the player at the position of that chair is removed from the game.

## Expected output
The function should return a list of tuples of remaining players and which chair they sat in. For instance, if the final round resulted in:

```javascript
chars = [55, 3];
players = [ 'Greninja', 'Ganondorf' ];
```

Then the expected output would be:
```javascript
result = [
  [ 'Greninja', 55 ],
  [ 'Ganondorf', 3 ]
]
```


## Example

```javascript
let chars = [ 1, 2 , 3, 4 ];
let players = [ 'Tyler', 'Brian', 'Pomeranz', 'Nayana' ];
let rounds = [
  [ 2 , 2 ]
  [ 5 , 4 ]
];
```

During round 0, the players rotate (to the right) like so:

`time: 2 becomes 1`
```javascript
players = [ 'Nayana', 'Tyler', 'Brian', 'Pomeranz' ]
```
`time: 1 becomes 0`
```javascript
players = [ 'Pomeranz', 'Nayana', 'Tyler', 'Brian' ]
```

Now that `time === 0`, the specified `chair` is removed (chair `2`);
```javascript
chairs = [ 1, 3, 4 ];
```

The player that would have sat at chair 2 is removed from the game, so the remaining players and chairs are:
```javascript
chars = [ 1 , 3, 4 ];
players = [ 'Pomeranz', 'Tyler', 'Brian' ];
```

Round 1 is played, and results in the following:

```javascript
players = [ 'Tyler', 'Brian', 'Pomeranz' ];
chairs = [ 1, 3, 4 ];
```

The player that would have sat at chair `4` is removed from the game, and the remaining players and chairs are:

```javascript
players = [ 'Tyler', 'Brian' ];
chairs = [ 1, 3 ];
```
Which means the result is:
```javascript
result = [
  [ 'Tyler', 1 ],
  [ 'Brian', 3 ]
];
```