// const question = document.getElementById("questions");
// const choices = document.getElementsByClassName("choice");
// console.log(choices)


// let correctQuits = {}
// let delayQuits = true;
// score = 0;
// let quitsCounter = 0;
// let avalibleQuits = [];

// let questions = [];

// const BASICAPI = "https://opentdb.com/api.php?amount=10&category=21";

// async function getApi() {
//     try {
//       return await fetch(BASICAPI).then((res) => res.json());
//     } catch (error) {
//       alert("error");
//     } finally {
//     }
//   }
  
//   function printApi() {
//     getApi().then((res) => console.log(res));
//   }
//   printApi();
  
// fetch(BASICAPI).then(res =>{
//     console.log(res)
//     return response.json();
// }).then(loadQuits =>{
//     console.log(loadQuits);
//     questions = loadQuits;
//     startGame();
// })
// .catch()


// let rightQuit = 0
// let scoreee = 0

// loaddQuitz()

// function loaddQuits() {
//     answerD()

    
//     const currectQuitsData = quitData[rightQuit]
//     questionEl.innerText = rightQuit.question


    
// }








// const CORRECT_BONUS = 10;
// const MAX_QUITS = 3;


// startGame = ()=> {
//     quitsCounter =0;
//     score = 0;
//     avalibleQuits = [...questions];
//     console.log( avalibleQuits);
//     newQuits();

// }
// newQuits = ()=>{
//     quitsCounter ++;
//     const questionIndex =  Math.floor(Math.random() * avalibleQuits.length);
//     correctQuits = avalibleQuits[questionIndex]
//     question.innerText = correctQuits.question
//     choices.forEach(choiceS => {
//         const number =choiceS.dataset['number'];
//         choices.innerText =correctQuits['choice' + number];
//     });
// };
// newQuits();





// let questions = [
    
//         {
//         question: "nati",
//         a: "25",
//         b: "20",
//         c: "28",
//         d: "2",
//         correct:1
//     },
    
//         {
//         question: "nati",
//         a: "25",
//         b: "20",
//         c: "28",
//         d: "2",
//         correct:1
//     },
    
//         {
//         question: "nati",
//         a: "25",
//         b: "20",
//         c: "28",
//         d: "2",
//         correct:1
//     },
    
//         {
//         question: "nati",
//         a: "25",
//         b: "20",
//         c: "28",
//         d: "2",
//         correct:1
//     },
    
//     ]
//     const quitz = document.getElementById('quitz')
//     const answer = document.querySelectorAll('.aanswer')
//     const question = document.getElementById('questions')
//     const a_text = document.getElementById('a_text')
//     const b_text = document.getElementById('b_text')
//     const c_text = document.getElementById('c_text')
//     const d_text = document.getElementById('d_text')
//     const btnGo = document.getElementById('btnGo')
    
    
// let score = 0;
// let quitsCounter = 0;

// // loadQuitz()

// function load() {

//  selectAnswer()   


// const correctAnwer = quitData[quitsCounter]

// question.innerText = correctAnwer.question
// a_text.innerHTML = correctAnwer.a
// b_text.innerHTML = correctAnwer.b
// c_text.innerHTML = correctAnwer.c
// d_text.innerHTML = correctAnwer.d

// }

// function selectAnswer() {
//     answer.forEach(answer =>{
//         answer.checked = false
//     } )
// }

// function selected(){
//     let answer 
//     answer.forEach(answer=>{
//         if(answer.checked){
//             answer == answer.id
//         }
//     })
//     return answer
// }
// btnGo.addEventListener('click',()=> {
//     const answer = selected()
//     if (answer) {
//         if(answer === quitData[correctAnwer].correct){
//             score ++;

//         }
//         correctAnwer++
//         if (correctAnwer < quitData.length) {
//             loadQuitz()
//         }else{
//             quitz.innerHTML = `<p> wellDone ${score}/${quitData.length} yoi right<p/>`
//         }
//     }
// })





// "use strict";
// const d = document;
// const _game = d.getElementById("game");
// const _scoreDisplay = d.getElementById("score");
// let score = 0;
// const _Agenres = [
//   {
//     id: 11,
//     name: "Film",
//   },
//   {
//     id: 12,
//     name: "Books",
//   },
//   {
//     id: 13,
//     name: "Music",
//   },
//   {
//     id: 14,
//     name: "Video Games",
//   },
//   {
//     id: 15,
//     name: "Television",
//   },
//   {
//     id: 16,
//     name: "Musical & Theatres",
//   },
//   {
//     id: 15,
//     name: "History",
//   },
//   {
//     id: 16,
//     name: "Geography",
//   },
//   {
//     id: 17,
//     name: "Mythology",
//   },
//   {
//     id: 18,
//     name: "Animals",
//   },
//   {
//     id: 19,
//     name: "Sports",
//   },
//   {
//     id: 20,
//     name: "Computers",
//   },
// ];
// const _Aleves = ["easy", "medium", "hard"];

// function addGenre(genre) {
//   const column = d.createElement("div");
//   column.classList.add("genre-column");
//   column.innerHTML = genre.name;
//   _game.append(column);

//   _Aleves.forEach((level) => {
//     const card = d.createElement("div");
//     card.classList.add("card");
//     column.append(card);

//     if (level === "easy") {
//       card.innerHTML = 100;
//     }
//     if (level === "medium") {
//       card.innerHTML = 200;
//     }
//     if (level === "hard") {
//       card.innerHTML = 300;
//     }

//     const url = `https://opentdb.com/api.php?amount=10&category=21=${genre.id}&difficulty=${level}&type=boolean`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         //console.log(data);
//         card.setAttribute("data-question", data.results[0].question);
//         card.setAttribute("data-answer", data.results[0].correct_answer);
//         card.setAttribute("data-value", card.getInnerHTML());
//       })
//       .then((done) => card.addEventListener("click", flipCard));
//   });
// }
// _Agenres.forEach((item) => addGenre(item));

// function flipCard() {
//   //console.log("click");
//   this.innerHTML = "";
//   const textDisplay = d.createElement("div");

//   const trueBtn = d.createElement("button");
//   const falseBtn = d.createElement("button");

//   textDisplay.classList.add("text");
//   trueBtn.classList.add("true-btn");
//   falseBtn.classList.add("false-btn");

//   trueBtn.innerHTML = "True";
//   falseBtn.innerHTML = "False";

//   trueBtn.addEventListener("click", getResult);
//   falseBtn.addEventListener("click", getResult);

//   textDisplay.innerHTML = this.getAttribute("data-question");

//   this.append(textDisplay, trueBtn, falseBtn);

//   const _Acards = Array.from(d.querySelectorAll(".card"));
//   _Acards.forEach((card) => card.removeEventListener("click", flipCard));
// }

// function getResult() {
//   const allCards = Array.from(d.querySelectorAll(".card"));
//   allCards.forEach((card) => card.addEventListener("click", flipCard));

//   const cardOfBtn = this.parentElement;
//   //console.log(cardOfBtn);
//   if (cardOfBtn.getAttribute("data-answer") === this.innerHTML) {
//     score = score + parseInt(cardOfBtn.getAttribute("data-value"));
//     _scoreDisplay.innerHTML = score;
//     cardOfBtn.classList.add("correct-answer");
//     setTimeout(() => {
//       while (cardOfBtn.firstChild) {
//         cardOfBtn.removeChild(cardOfBtn.lastChild);
//       }
//       cardOfBtn.innerHTML = cardOfBtn.getAttribute("data-value");
//     }, 1000);
//   } else {
//     cardOfBtn.classList.add("incorrect-answer");
//     setTimeout(() => {
//       while (cardOfBtn.firstChild) {
//         cardOfBtn.removeChild(cardOfBtn.lastChild);
//       }
//       cardOfBtn.innerHTML = 0;
//     }, 1000);
//   }
//   cardOfBtn.removeEventListener("click", flipCard);
// }


var position = 0;        
var dataQuestion = [];   
var score = 0;           
const container = document.getElementById("container-question");   
const finishSection = document.getElementById("finish-section");  

function getQuestion() {                                                     
  const totalQuestions = document.getElementById("n-questions").value;       
  const categoryQuestions = document.getElementById("category").value;       
  const difficultyQuestions = document.getElementById("difficulty").value;  
  const typeQuestions = document.getElementById("type").value;              
  const link = `https://opentdb.com/api.php?amount=10&category=21`;  
  fetch(link)                               
    .then((response) => response.json())    
    .then((data) => {                       
      dataQuestion = data;                  

      if (typeQuestions === "multiple") {                                      
        container.innerHTML = renderQuestionsTemplate(dataQuestion.results);  
      } else {                                                                 
        container.innerHTML = renderQuestionsBoolean(dataQuestion.results);    
      }
    });
}

function desorderPositionArray(array, iter) {               
  let random = []                                          

  while (random.length < iter) {                            

    let positionArray = Math.floor(Math.random() * iter)    

    if (!random.includes(array[positionArray])) {           
      random.push(array[positionArray])                     
    }
  }
  return random                                             
}


function hiddeForm() {                                     
  document.getElementById("form-cont").classList.add("dp-none");
}


function changeQuestion() {                                 

  getInputsValue()                                          

  if (position === dataQuestion.results.length - 1) {       
    container.style.display = "none"                              
    finishSection.innerHTML = `<div class = "finish" style="width: 100%; padding: 100px 0px; text-align: center; font-size: 1.3rem;"><h1 class = "mb">Test finished<br> Score = ${score}</h1><a href="../pages/select.html">Play Again</a></div>`
    return
  }

  position++;                                                             
  const typeQuestions = document.getElementById("type").value;            
  if (typeQuestions === "multiple") {                                     
    container.innerHTML = renderQuestionsTemplate(dataQuestion.results);  
  } else {                                                                
    container.innerHTML = renderQuestionsBoolean(dataQuestion.results);   
  }
  return;

}


function renderQuestionsTemplate(question) {                 
  var array = question[position].incorrect_answers           
  array.push(question[position].correct_answer)              
  let newOrderQuestion = desorderPositionArray(array, 4)     
  return `<form class="form-test" onsubmit="event.preventDefault(), changeQuestion()">   
    <div class="question-form">
      <h2>${question[position].question}</h2>
    </div>
    <div class="answer-form">
      <label>
        <input type="radio" name="answer" value="${newOrderQuestion[0]}" required>
        ${newOrderQuestion[0]}
      </label>
      <label>
        <input type="radio" name="answer" value="${newOrderQuestion[1]}">
        ${newOrderQuestion[1]}
      </label>
      <label>
        <input type="radio" name="answer" value="${newOrderQuestion[2]}">
        ${newOrderQuestion[2]}
      </label>
      <label>
        <input type="radio" name="answer" value="${newOrderQuestion[3]}" >
        ${newOrderQuestion[3]}
      </label>
      <button type="submit">
        NEXT
      </button>
    </div>
  </form>`;
}

function renderQuestionsBoolean(question) {                   
  var arraybool = question[position].incorrect_answers        
  arraybool.push(question[position].correct_answer)           
  let newOrderQuestion = desorderPositionArray(arraybool, 2)  
  return `<form class="form-test"  onsubmit="event.preventDefault(), changeQuestion()">
    <div class="question-form">
      <h2>${question[position].question}</h2>
    </div>
    <div class="answer-form">
      <label>
        <input type="radio" name="answer" value="${newOrderQuestion[0]}" required>
        ${newOrderQuestion[0]}
      </label>
      <label>
        <input type="radio" name="answer" value="${newOrderQuestion[1]}" />
        ${newOrderQuestion[1]}
      </label>
      <button type="submit">
        NEXT
      </button>
    </div>
  </form>`;
}

// ahora vamos a sacar el resultado                           
function getInputsValue() {                                   
  let answerInput = document.getElementsByTagName("input");   
  answerInput = Array.from(answerInput);                     
  answerInput.map(element => {                                
    if (element.checked) {                                   
      if (element.value === dataQuestion.results[position].correct_answer) {  
        score = score + 10;                                  
      }
    }
  })
}
