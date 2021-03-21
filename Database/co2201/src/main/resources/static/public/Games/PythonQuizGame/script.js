//where am i?
//how many questions left/wrong/score
//upload more questions
//are the questions/answers randomized?
//navigation through questions

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionImg = document.getElementById('questionImg')
const startingMinutes=03;
const countdownEl = document.getElementById('countdown');
let time = startingMinutes*60;
setInterval(updateCountdown, 1000);

let shuffledQuestions, currentQuestionIndex
let countRightAnswer = 0;
document.getElementById('right_answers').classList.add('hide')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function updateCountdown(){
  const minutes = Math.floor(time/60);
  let seconds = time%60;
  
  seconds = seconds< 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  time =  time<0 ? 0:time;
}

function startGame() {
  countRightAnswer=0;
  startButton.classList.add('hide')
  document.getElementById('right_answers').classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  myFunction()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  if (selectedButton.dataset=correct){
    countRightAnswer= countRightAnswer+5;
    document.getElementById('right_answers').innerHTML = "Scores:"+countRightAnswer;
  }
  
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
var myVar;

function myFunction() {
  myVar = setTimeout(alertFunc, 180000);
}

function alertFunc() {
  alert("Timeout!!!");
}


const questions = [
  {
    question: 'What type of exceptions are there?',
    answers: [
      { text: 'StringError, IntegerError, ValueError, NameError', correct: false },
      { text: 'TypeError, NameError, ValueError, IndexError  ', correct: true },
      { text: 'StringError, IntegerError, SyntaxError, SemanticsError ', correct: false },
      { text: 'TypeError, IntegerError, ValueError, NameError, StringError', correct: false }
    ]
  },
  {
    question: 'What is a method in object oriented programming?',
    answers: [
      { text: 'How you decide what object you will create', correct: false },
      { text: 'The defining behaviour of your object', correct: true },
      { text: 'The appearance of your object', correct: false },
      { text: 'The way you write your code', correct: false }
    ]
  },
  {
    question: 'Which of the following is an invalid statement?',
    answers: [
      { text: 'abc = 1,000,000', correct: false },
      { text: 'a b c = 1000 2000 3000', correct: true },
      { text: 'a,b,c = 1000, 2000, 3000', correct: false },
      { text: 'a_b_c = 1,000,000', correct: false }
    ]
    
  },
  {
    question: 'Suppose list1 is [2, 33, 222, 14, 25], What is list1[-1] ?',
    answers: [
      { text: 'Error', correct: false },
      { text: '2', correct: false },
      { text: 'None', correct: false },
      { text: '25', correct: true }
    ]
  },
  {
    question: 'To open a file c:scores.txt for writing, we use:',
    answers: [
      { text: ' outfile = open(“c:scores.txt”, “r”)', correct: false },
      { text: ' outfile = open(file = “c:scores.txt”, “o”)', correct: false },
      { text: 'outfile = open(file = “c:scores.txt”, “r”)', correct: false },
      { text: 'outfile = open(“c:scores.txt”, “w”)', correct: true }
    ]
  },
  {
    question: 'When will the else part of try-except-else be executed?',
    answers: [
      { text: 'always', correct: false },
      { text: 'when an exception occurs', correct: false },
      { text: 'when no exception occurs', correct: true },
      { text: 'when an exception occurs into except block', correct: false }
    ]
  },
  {
    question:'Suppose list1 is [1, 3, 2], What is list1 * 2?',
    answers:[
      {text:'[2, 6, 4]', correct:false},
      {text:'[1, 3, 2, 1, 3]', correct:false},
      {text:'[1, 3, 2, 1, 3, 2]', correct:true},
      {text:'[1, 3, 2, 3, 2, 1]', correct:false}
    ]
  },
  {
    question:'To insert 5 to the third position in list1, we use which command?',
    answers:[
      {text:'list1.insert(3, 5)', correct:false},
      {text:' list1.insert(2, 5)', correct:true},
      {text:'list1.add(3, 5)', correct:false},
      {text:'list1.append(3, 5)', correct:false}
    ]
  },
 {
    question:'Write the list comprehension to pick out only negative integers from a given list ‘l’.',
    answers:[
      {text:'[x<0 in l]', correct:false},
      {text:'[x for x<0 in l]', correct:false},
      {text:'[x in l for x<0]', correct:false},
      {text:'[x for x in l if x<0]', correct:true}
    ]
  },
  {
    question:'If a=(1,2,3,4), a[1:-1] is:',
    answers:[
      {text:'Error, tuple slicing doesn’t exist', correct:false},
      {text:'[2,3]', correct:false},
      {text:'(2,3,4)', correct:false},
      {text:'(2,3)', correct:true}
    ]
  },
  {
    question:'Set makes use of __________  and Dictionary makes use of ____________',
    answers:[
      {text:'keys, key values', correct:true},
      {text:'keys, keys', correct:false},
      {text:'key values, keys', correct:false},
      {text:'key values, key values', correct:false}
    ]
  },
  {
    question:'Input order is preserved in sets.',
    answers:[
      {text:'True', correct:false},
      {text:'False', correct:true}
    ]
  },
  {
    question:'Suppose d = {“john”:40, “peter”:45}, to delete the entry for “john” what command do we use?',
    answers:[
      {text:'d.delete(“john”:40)', correct:false},
      {text:'del d(“john”:40)', correct:false},
      {text:'d.delete(“john”)', correct:false},
      {text:'del d[“john”]', correct:true}
    ]
  },
  {
    question:'What will be the output of the following Python function:  random.uniform(3,4)',
    answers:[
      {text:'Either 3 or 4', correct:false},
      {text:'Error', correct:false},
      {text:'Any integer other than 3 and 4', correct:false},
      {text:'Any decimal value between 3 and 4', correct:true}
    ]
  }
]