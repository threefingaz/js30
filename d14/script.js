// start with strings, numbers and booleans
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy',];
console.log('Original', players);
// and we want to make a copy of it.
// You might think we can just do something like this:
const players_copy = players;

// however what happens when we update that array?
players_copy[2] = 'Al';

// now here is the problem!
console.group('Assign original array to variable and update variable')
console.log('New', players_copy);
console.log('Original', players);
console.groupEnd('Assign original array to variable');

// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one day
const slice = players.slice();
slice[2] = 'Slice';

// or create a new array and concat the old one in
const concat = [].concat(players);
concat[2] = 'Concat';

// or use the new ES6 Spread
const spread = [...players];
spread[2] = 'Spread';

// now when we update it, the original one isn't changed
console.group('Use .slice() without arguments');
console.log('New', slice);
console.log('Original', players);
console.groupEnd('Use .slice() without arguments');

console.group('Create a new array and concat the original');
console.log('New', concat);
console.log('Original', players);
console.groupEnd('Create a new array and concat the original');

console.group('ES6 Spread Array');
console.log('New', spread);
console.log('Original', players);
console.groupEnd('ES6 Spread Array');

// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
    name: 'Al Nikitin',
    age: 30,
};
console.log('Original object', person);

// and think we make a copy:
// how do we take a copy instead?
const assign = Object.assign({}, person, {
    number: 8,
    age: 31,
});

console.group('Copy object with Object.assign()');
console.log('New', assign);
console.groupEnd('Copy object with Object.assign()');

// We will hopefully soon see the object ...spread
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const Al = {
    name: 'Al',
    age: 30,
    social: {
        twitter: '@threefingaz'
    },
};

console.log('Nested object', Al);

const json_parse = JSON.parse(JSON.stringify(Al));

console.group('Deep clone object with JSON.parse & JSON.stringify');
console.log('New', json_parse);
console.groupEnd('Deep clone object with JSON.parse & JSON.stringify');
