'use strict';

// Welcoming the user:

alert('Welcome to About Me Game');

let userName = prompt('What is your name?');
console.log('Welcome ' + userName);
alert('Welcome ' + userName );
let score = 0;

// First Question
function firstQ () {
    let firstAnswer = prompt('Do I like the Facebook?');


if (firstAnswer.toLowerCase() === 'yes' || firstAnswer.toLowerCase() === 'y'){
    // console.log('You are Wrong!');
   alert('You are Wrong!');
} else if (firstAnswer.toLowerCase() === 'no' || firstAnswer.toLowerCase() === 'n'){
    // console.log('You are right');
    alert('You are right!');
    score++ ; 
}else{
    // console.log('As you like, you can ignore this question');
    alert('As you like, you can ignore this question');

}

}
firstQ();

// Second Question

let secondAnswer = prompt('Have I ever lived outside Jordan?');

if (secondAnswer.toLowerCase() === 'yes' || secondAnswer.toLowerCase() === 'y'){
    // console.log('You are right!');
    alert('You are right !');
    score++ ; 
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
    score++ ; 
}else{
    // console.log('As you like, you can ignore this question');
    alert('As you like, you can ignore this question ');

}

// Fourth Question

let fourthAnswer = prompt('Do I love reading books about History?');

if (fourthAnswer.toLowerCase() === 'yes' || fourthAnswer.toLowerCase() === 'y'){
    // console.log('You are right!, who doesn\'t');
    alert('You are right!, who doesn\'t');
    score++ ; 
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
    score++ ; 
} else if (fifthAnswer.toLowerCase() === 'no' || fifthAnswer.toLowerCase() === 'n'){
    // console.log('WRONG!!!');
    alert('WRONG!!!');
}else{
    // console.log('As you like, you can ignore this question');
    alert('As you like, you can ignore this question');

}

// Sixth Question


let sixthAnswer = '';

for (let i = 0; i < 3; i++) {

    if(i==0){
        sixthAnswer =prompt('Guess a number between 0-15');
    }

    if (sixthAnswer >5 ){
        alert('too high');
        sixthAnswer = prompt('Guess again');
    }else if (sixthAnswer <5){
        alert('too low');
        sixthAnswer = prompt('Guess again');
    }
    if (i==2 && sixthAnswer != 5){
        alert('The correct answer is 5');
    }else if (sixthAnswer==5){
        alert('Way to go, you\'ve gussed it!') ;
        score++ ; 
       break;  
    }
    console.log(i);
}


// Seventh Question

let country= ['japan','america','england','germany','palestine','australia'];
let answerCountry = prompt('Which country you think I would like to visit?' + '\n' + 'You have the following countries to choose from: japan,america,england,germany,palestine,australia');

for (let i = 0; i<5;i++){

    if (answerCountry.toLowerCase() === 'japan') {
        alert('you got it!');   
        console.log('you got it!');
        score++ ; 
        break;
    }else if (answerCountry.toLowerCase() === 'england') {
        alert('you got it!');   
        console.log('you got it!');
        score++ ; 
        break;
            
    }else if (answerCountry.toLowerCase() === 'palestine') {
        alert('you got it!');   
        console.log('you got it!');
        score++ ; 
        break;
        
    }else{
        answerCountry = prompt('Worng, try agian, Here are the choices: japan,america,england,germany,palestine,australia ');
        answerCountry.toLowerCase();
    }
    
}

alert('In fact all these countries are considered as right answer: japan, england, palestine');
 
console.log('In fact all these countries are considered as right answer:,japan,america,england,germany,palestine,australia');



alert('I hope that you had fun :) ' + userName + ', your got ' + score + ' out of 7'); 