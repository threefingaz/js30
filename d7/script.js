const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const adults = people.some(person => (new Date()).getFullYear() - person.year >= 19);
console.log('is at least one person 19 or older?', adults);

// Array.prototype.every() // is everyone 19 or older?
const all_adults = people.every(person => (new Date().getFullYear()) - person.year >= 19);
console.log('is everyone 19 or older?', all_adults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log('find the comment with the ID of 823423', comment);

// Array.prototype.findIndex()
// Find the comment with this ID
const comment_index = comments.findIndex(comment => comment.id === 823423);
console.log('Find the comment with this ID', comment_index);

// delete the comment with the ID of 823423
const new_comments = [
  ...comments.slice(0, comment_index),
  ...comments.slice(comment_index + 1)
];
console.log('delete the comment with the ID of 823423');
console.table(new_comments);
