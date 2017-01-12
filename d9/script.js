const dogs = [
    {
        name: 'Snickers',
        age: 2,
    }, {
        name: 'hugo',
        age: 8,
    },
];

const p = document.querySelector('p');

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
// clearing
console.clear();

// Regular
console.log('👊😇');

// Interpolated
console.log('How about %s?', '🍻');

// Styled
console.log('%cBOOOM💥', 'font: bold 30px sans-serif');

// warning!
console.warn('Atention!');

// Error :|
console.error('Ooops!');

// Info
console.info("It's ok");

// Testing
console.assert(2*2 === 5, 'Something wrong here');

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(dog.name);
    console.log('Age:', dog.age);
    console.log('It like human age:', dog.age*7);
    console.groupEnd(dog.name);
});

// counting
console.count('Hey');
console.count('Hey');
console.count('Ho');
console.count('Hey');
console.count('Ho');
console.count('Lets Go!');

// timing
console.time('fetching');
fetch('https://api.github.com/users/threefingaz')
    .then(data => data.json())
    .then(result => {
        console.timeEnd('fetching');
        console.log(result);
    });
