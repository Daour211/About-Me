'use strict';

// Welcoming the user:

alert('Welcome to About Me Game');

let userName = prompt('What is your name?');
console.log('Welcome ' + userName);
alert('Welcome ' + userName );

// First Question
let firstAnswer = prompt('Do I like the Facebook?');
let firstalert ;
if (firstAnswer.toLowerCase() === 'yes' || firstAnswer.toLowerCase() === 'y'){
    // console.log('You are Wrong!');
    firstalert=alert('You are Wrong!');
} else if (firstAnswer.toLowerCase() === 'no' || firstAnswer.toLowerCase() === 'n'){
    // console.log('You are right');
    alert('You are right!');
}else{
    // console.log('As you like, you can ignore this question');
    alert('As you like, you can ignore this question');

}

// Second Question
let secondAnswer = prompt('Have I ever lived outside Jordan?');
if (secondAnswer.toLowerCase() === 'yes' || secondAnswer.toLowerCase() === 'y'){
    // console.log('You are right!');
    alert('You are right !');
} else if (secondAnswer.toLowerCase() === 'no' || secondAnswer.toLowerCase() === 'n'){
    // console.log('You are wrong !');
    alert('You are wrong!');
}else{
    // console.log('As you like, you can ignore this question ');
    alert('As you like, you can ignore this question ');

}

// Third Question

let thirdAnswer = prompt('Do I love the junk food?');
if (thirdAnswer.toLowerCase() === 'yes' || thirdAnswer.toLowerCase() === 'y'){
    // console.log('Wrong Wrong!');
    alert('Wrong Wrong!');
} else if (thirdAnswer.toLowerCase() === 'no' || thirdAnswer.toLowerCase() === 'n'){
    // console.log('Completely right!');
    alert('Completely right!');
}else{
    // console.log('As you like, you can ignore this question');
    alert('As you like, you can ignore this question ');

}

// Fourth Question

let fourthAnswer = prompt('Do I love reading books about History?');
if (fourthAnswer.toLowerCase() === 'yes' || fourthAnswer.toLowerCase() === 'y'){
    // console.log('You are right!, who doesn\'t');
    alert('You are right!, who doesn\'t');
} else if (fourthAnswer.toLowerCase() === 'no' || fourthAnswer.toLowerCase() === 'n'){
    // console.log('Completely wrong!');
    alert('Completely wrong!');
}else{
    // console.log('As you like, you can ignore this question');
    alert('As you like, you can ignore this question');

}

// Fifth Question

let fifthAnswer = prompt('Do I like the Anime?');
if (fifthAnswer.toLowerCase() === 'yes' || fifthAnswer.toLowerCase() === 'y'){
    // console.log('You are right!');
    alert('You are right!');
} else if (fifthAnswer.toLowerCase() === 'no' || fifthAnswer.toLowerCase() === 'n'){
    // console.log('WRONG!!!');
    alert('WRONG!!!');
}else{
    // console.log('As you like, you can ignore this question');
    alert('As you like, you can ignore this question');

}

alert('I hope that you had fun :) ' + userName) 