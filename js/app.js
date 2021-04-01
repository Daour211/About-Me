'use strict';

// // Welcoming the user:

alert('Welcome to About Me Game');

let userName = prompt('What is your name?');
// console.log('Welcome ' + userName);
alert('Welcome ' + userName );
let score = 0;

// // First Question
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

// // Second Question

function secondQ() {
    let secondAnswer = prompt('Have I ever lived outside Jordan?');

    if (secondAnswer.toLowerCase() === 'yes' || secondAnswer.toLowerCase() === 'y') {
        // console.log('You are right!');
        alert('You are right !');
        score++;
    } else if (secondAnswer.toLowerCase() === 'no' || secondAnswer.toLowerCase() === 'n') {
        // console.log('You are wrong !');
        alert('You are wrong!');
    } else {
        // console.log('As you like, you can ignore this question ');
        alert('As you like, you can ignore this question ');

    }

}
secondQ();


// // Third Question
function thirdQ() {
    let thirdAnswer = prompt('Do I love the junk food?');

    if (thirdAnswer.toLowerCase() === 'yes' || thirdAnswer.toLowerCase() === 'y') {
        // console.log('Wrong Wrong!');
        alert('Wrong Wrong!');
    } else if (thirdAnswer.toLowerCase() === 'no' || thirdAnswer.toLowerCase() === 'n') {
        // console.log('Completely right!');
        alert('Completely right!');
        score++;
    } else {
        // console.log('As you like, you can ignore this question');
        alert('As you like, you can ignore this question ');

    }


}
thirdQ();

// // Fourth Question
function fourthQ() {
    let fourthAnswer = prompt('Do I love reading books about History?');

    if (fourthAnswer.toLowerCase() === 'yes' || fourthAnswer.toLowerCase() === 'y') {
        // console.log('You are right!, who doesn\'t');
        alert('You are right!, who doesn\'t');
        score++;
    } else if (fourthAnswer.toLowerCase() === 'no' || fourthAnswer.toLowerCase() === 'n') {
        // console.log('Completely wrong!');
        alert('Completely wrong!');
    } else {
        // console.log('As you like, you can ignore this question');

    }

}
fourthQ();

// Fifth Question
function fifthQ() {
    let fifthAnswer = prompt('Do I like the Anime?');

    if (fifthAnswer.toLowerCase() === 'yes' || fifthAnswer.toLowerCase() === 'y') {
        // console.log('You are right!');
        alert('You are right!');
        score++;
    } else if (fifthAnswer.toLowerCase() === 'no' || fifthAnswer.toLowerCase() === 'n') {
        // console.log('WRONG!!!');
        alert('WRONG!!!');
    } else {
        // console.log('As you like, you can ignore this question');
        alert('As you like, you can ignore this question');

    }

}
fifthQ();

// Sixth Question

// there is another method at the end of the code
function sixthQ() {
    let sixthAnswer = '';

    for (let i = 0; i < 3; i++) {

        if (i == 0) {
            sixthAnswer = prompt('Guess a number between 0-15, and you have 4 attempts');
        }

        if (sixthAnswer >9) {
            alert('too high');
            sixthAnswer = prompt('Guess again');
        }else if (sixthAnswer > 5 && sixthAnswer < 9) {
            alert(' high');
            sixthAnswer = prompt('Guess again');
        } else if (sixthAnswer < 5 && sixthAnswer >= 3) {
            alert('low');
            sixthAnswer = prompt('Guess again');
        }else if (sixthAnswer < 3) {
            alert('too low');
            sixthAnswer = prompt('Guess again');
        }else{
            alert('please enter a number between 0-15');
            sixthAnswer = prompt('Guess again');
        }

        if (i == 2 && sixthAnswer != 5) {
            alert('The correct answer is 5');
        } else if (sixthAnswer == 5) {
            alert('Way to go, you\'ve gussed it!');
            score++;
            break;
        }
        console.log(i);
    }


    


}
sixthQ();

// // // Seventh Question

// // and there is another method using while loop

function seventhQ() {
    let country = ['japan', 'england', 'palestine'];
    let answerCountry = '';

    for (let i = 0; i < 6; i++) {

       answerCountry = prompt('Which country you think I would like to visit?, and you have 6 attempts');

        for (let j = 0; j < country.length; j++) {
            
            if (answerCountry === country[j]) {
                alert('you got right, all the correct answers are '+ country);
                score++;
                i=6;
            }
            
        }
        
        if (i== 5) {
            alert('The correct answersare: ' + country);
        }else if (i<6){
            alert('wrong,try again');
        }

    
    }

}
seventhQ();




alert('I hope that you had fun :) ' + userName + ', your got ' + score + ' out of 7'); 



// Another method of solving Question 6

// alert('You have to pick a number between 0-10 & you have 4 attempts')
    // for (let i = 0; i< 4; i++) {

    //         sixthAnswer=prompt('Guess a nummber ')
    //         sixthAnswer=parseInt(sixthAnswer);
            
    //         if (sixthAnswer > 5) {
    //             alert('too high');
             
    //         }else if (sixthAnswer < 5){
    //             alert('too low');
                
    //         }else if (sixthAnswer===5){
    //             alert('you got it!');
    //             break;
    //         }else{
    //             alert('please eneter a number 0-10')
    //         }

    //         if (i==3 && sixthAnswer !== 5) {
    //             alert('the correct asnwer is 5!');
    //         }
    //     }

    