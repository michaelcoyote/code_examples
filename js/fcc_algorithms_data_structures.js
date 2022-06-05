#!/usr/bin/js
//
// Examples from the Free Code Camp - Algorithms and Data Structures class
// thrown here in a scratch file as crude documentation
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures
//
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let flag = ""
  for (let i = 0; i < contacts.length; i++) {
    console.log(i +':'+name+":"+prop)
    if (contacts[i]['firstName'] != name) {
      flag = "No such contact";
      console.log("setting no contact flag for " + name)
      continue;
    } else if (contacts[i]['firstName'] == name) {
      if (contacts[i][prop]) {
        console.log("returning prop " + prop)
        return contacts[i][prop]
      } else {
       return "No such property"
      }
    } else{
      continue;
    }
  }
  return flag
  // Only change code above this line
}

console.log("start____");
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Bob", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));

// Only change code below this line
function countdown(n){
  if (n < 1) {
    console.log(n)
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    console.log(n + ": " + countArray);
    return countArray
  }
}
console.log(countdown(5))


function largestOfFour(arr) {
  let res = [];
  for (let n = 0; n < arr.length; n++) {
    let subres = -27000
    for (let j = 0; j < arr[n].length; j++) {
      if (subres < arr[n][j]) {
        subres = arr[n][j];
        /* console.log(`${arr[n][j]}: ${subres}`); */
        }
    }
  console.log(`${arr[n]}: ${subres}`)
  res.push(subres);
  }
  /* console.log(`${arr}: ${res}`) */
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*Confirm the ending
 *
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
 * */

function confirmEnding(str, target) {
  console.log(`${target}: ${str.substring(str.length - target.length)}`)
  if (str.substring(str.length - target.length) == target) {
    return true
  } else {
    return false
  }
  return str;
}

confirmEnding("Bastian", "n");


// Repeat a string
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
//

function repeatStringNumTimes(str, num) {
  let ret = '';
  if (num > 0) {
    for (let j = 0; j < num; j++) {
      ret += str;
    }
  }
  return ret;
}

// Truncate a string
// prompt: Truncate string if it's longer than max string length and pad with
// '...'
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

function truncateString(str, num) {
  if (num < str.length) {
      return `${str.substring(0,num)}...`;
  } else {
    return str
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Finders Keepers
// Prompt: search through and array and return first element that passes truth
// test.  If no element matches, pass undefined
// Struggled with this because I had an unneeded `else`
// Removed the else and it passed. 
function findElement(arr, func) {
  let num = 0
  for (let n in arr) {
    console.log(`${arr}: ${arr[n]}: ${func(n)}`)
    if (func(arr[n])) {
      return arr[n];
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Bool WHo
// Determine if the input is a bool
// Note: I had to use the `===` because I kept matching `1` JS is grate.

function booWho(bool) {
  return ((bool === true||bool === false) ? true : false)
}

console.log(booWho(null));

// Frankensplice
// Took a while to realize that I could do this entirely with array slices
//
function frankenSplice(arr1, arr2, n) {
  let ret = []
  ret.push(...arr2.slice(0,n))
  ret.push(...arr1)
  ret.push(...arr2.slice(n))
  return ret;
}

console.log(frankenSplice([1,2,3],[4,5],1))
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Falsy Bouncer

function bouncer(arr) {
  let res = [];
  for (let i in arr) {
    if (arr[i]) {
      res.push(arr[i]);
    }
  }
  return res;
}

bouncer([7, "ate", "", false, 9]);

// get index
// Prompt:
// Return the lowest index at which a value (second argument) should be inserted into an array
// (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1
// (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look
// like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
//
// Find the index of the place where a number might be inserted in an array
//
//
// This one doesn't work:
// function getIndexToInsNope(arr, num) {
//   arr.sort((a, b)=>a-b)
//   for (let i in arr) {
//     // console.log(`${arr[i]}: ${num}`)
//     if (arr[i] == num) {
//       console.log(`eq ${arr} - ${num}: ${typeOf(i)}`);
//       return +i + 1;
//     } else if (arr[i] > num){
//       console.log(`elif ${arr} - ${num}: ${i}`);
//       return +i;
//     } else if (+i > arr.length) {
//       console.log(`else: ${arr} - ${num}: ${+i }`);
//       return +i - 1
//     }
//   }
// }

function getIndexToIns(arr, num) {
  arr.sort((a, b)=>a-b)
  for (let i in arr) {
    // console.log(`${arr[i]}: ${num}`)
    if (arr[i] >= num){
      console.log(`if ${arr} - ${num}: ${i}`);
      return +i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);

// Mutation
// Prompt: detect if all the letters of string 0 are in string 1
//
// Was able to solve this quickly.  Basically I'm doing a hash
// lookup against array 0 by leveraging `includes()`
// could constrict a hash table if I didn't have that abstraction.

function mutation(arr) {
  for (let n in arr[1]) {
    console.log(!arr[0].toLowerCase().includes(arr[1][n].toLowerCase()))
    if (!arr[0].toLowerCase().includes(arr[1][n].toLowerCase())) {
      return false;
    } 
  }
  return true;
}

mutation(["hello", "hey"]);

//
// Chunky Monkey
// Split off array into chunks
//
// Did too much overthinking on this one and the paired down solutuion worked
// best
//
//function chunkArrayInGroups(arr, size) {
//  let slices = parseInt(arr.length / size);
//  let mod = arr.length % size;
//  let res = [];
//  console.log(`${arr}: sz- ${size} / sl - ${slices}`)
//  for (var j = 0; j < (arr.length - mod); j += slices  ) {
//    console.log(`sli: ${j}: ${j + slices}`)
//    res.push(arr.slice(j, j + slices))
//  }
//  if (mod > 0) {
//    console.log(`mod: ${j}: ${arr.length}`)
//      res.push(arr.slice(j))
//  }
//  console.log(res);
//  return res;
//}

function chunkArrayInGroups(arr, size) {
  let res = [];
  for (let j = 0; j < arr.length; j += size) {
    res.push(arr.slice(j, j + size));
  }

  console.log(res);
  return res;
}


chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 3)


// Implement map function
//
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let j=0; j < this.length; j++) {
    newArray.push(callback(this[j]));
    console.log(`${j}: ${callback(this[j])}`)
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

//
//
//// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = watchList
.filter(i => i.imdbRating >= 8.0)
.map(({Title: title, imdbRating: rating}) => ({title, rating}));

// Only change code above this line

console.log(filteredList);


//
// Filter function
//
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  for (let j=0; j < this.length; j++) {
    if (callback(this[j])){
      newArray.push(this[j])
    }
  }
  // Only change code above this line
  console.log(newArray)
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// Reduce
//
function getRating(watchList) {
  // Only change code below this line
  let filteredWL = watchList.filter(d => d.Director == "Christopher Nolan")
  let averageRating = filteredWL.reduce((sum, wl) =>  (wl.imdbRating * 1) + sum, 0)/ filteredWL.length;
  // Only change code above this line
  return averageRating;
}
console.log(getRating(watchList));

// squarelist
const squareList = arr => {
  // Only change code below this line
  let foo =  arr.filter(i => i >= 0).filter(j => Number.isInteger(j))
  .map(x => x * x);
  console.log(`${arr}: ${foo}`)
  return foo
  // Only change code above this line
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
//
// Sort
// This one was odd because a plain sort() worked too but
// I went through the excercise anyway.
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1: -1;
  })
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// Non mutating sort
// to force an array copy use the concat() builtin
// function to force a new array to be created and
// assigned
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let res = arr.concat([]);
  return res.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1: -1
  })
  // Only change code above this line
}
nonMutatingSort(globalArray);
// Split function with very minimal regex..
function splitify(str) {
  // Only change code below this line
  let res;
  res = str.split(/ |,|-|\./);
  return res;
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"))

//
//
//join and split builtins
//
function sentensify(str) {
  // Only change code below this line
  return str.split(/,|-|\./).join(' ')


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");

//
// urlSlug
//
// Only change code below this line
function urlSlug(title) {
return title.trim().toLowerCase().split(/\s+/).join('-')

}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
//
//
// check positive
// uses .every()
//
function checkPositive(arr) {
  // Only change code below this line
  return arr.every(function(myIsPositive) {
    return myIsPositive > 0;
  })
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));
//
//Check positive
//uses .some()
//

function checkPositive(arr) {
  // Only change code below this line
  return arr.some(function(checkP) {
    return checkP > 0
  })
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));

//
// Currying
//
function add(x) {
  // Only change code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
      }
    }
  // Only change code above this line
}
console.log(add(10)(20)(30));

//
//
// sumall
//
function sumAll(arr) {
  let working = arr.concat([])
  working = working.sort(function(a,b) {return a - b})
  let res = Number(0)
  for (let j = working[0]; j <= working[1]; j++) {
    res += j
  }
  console.log(`${res}: ${working}`)
  return res
  // return arr.reduce((sum, x) => x + sum);
}
console.log(sumAll([1, 4]));
//
// Diff two arrays
//
// I'm not sure this is the solution they're looking for but it's funny
// to filter 1 against 2 and 2 against 1 and concat the results
// so I'm going with it.
//
// Another way might be to create a dictonary/kv store and then store the count
// of every word as the value then filter that way but it sounds wasteful.
//
// Another way would be to store all the numbers in an array then filter 1 and
// 2 against it and adding the missing items from 1 and 2 to the results.
//
function diffArray(arr1, arr2) {
  const newArr = arr2.filter(i => !arr1.includes(i))
                     .concat(arr1.filter( i => !arr2.includes(i)))
  return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

