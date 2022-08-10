

// function {
    
// }

// function {

// }

// function {

// }

 //local storage
 

 //questions


 //     console.log(questionTitle);
 let questions = [
     {
      title: 'What is the name of a popular online repository storage of code',
      selections: ['hhub', 'github', 'ghub', 'purplehub'],
      answer: 'githhub',
    },
  

    {
        title: 'What is the best practice in coding regarding comments?', 
        selections: ['leave comments before every function', 'leave comments only when the coder feels like it', 'leave comments sparsely', 'leave comments wherever helpful to direct anyone looking at the code'],
        answer: 'leave comments wherever helpful to direct anyone looking at the code',
    },
    {
        title: 'What is the name of the command center for Macs?',
        selections: ['terminal', 'terminal c', 'terminal a', 'terminal b'],
        answer: 'terminal',
    },
    
    {
        title: 'What is the command in terminal to create a new folder?',
        selections: ['mk dir', 'mkdir', 'nw fld', 'nwfld'],
        answer: 'mkdir',
    },
    
    {
        title: 'What is the command in terminal to create a new file?',
        selections: ['feel', 'touch', 'point', 'mkdir'],
        answer: 'githhub',
    },
]

// when the page loads
// reach into the html and grab the corresponding area
// getElementById or (pref) querySelector
// let questionTitle= document.getElementById('question-title')
// grab the first question and stick it into the elements value
// questionTitle.value = 
// repeat same for all options

function checkAnswer(event) {
    // look at event.
    // find out which button was clicked
    // compare it to the question answers

    // do the thing for right answers
    // or 
    // do the thing for wrong answers

    // move onto next question
}

// reach into the html. grab each radio button
// listen for a click addeventListener on the radio buttons and then evaluate if the answer is right or wrong and move on











// initials
// final score
// wrong or correct


//timer from https://iqcode.com/code/javascript/add-countdown-timer-to-javascript-quiz
var count = 70;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);
//subtract time