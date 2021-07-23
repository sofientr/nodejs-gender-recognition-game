


//create all global variables
const mainContent = document.querySelector("#main-content");
const formContainer = document.querySelector("#user-input-form")
const timerEl = document.querySelector("#socre");
let scoreObject = {};
let result;
let playerScore=19
// Questions Array
let questions = [];

// Counter for Questions Array
let counter = 0;
//Start Button selector
const startButton = document.querySelector("#startBtn");

// Get rid of form styling
formContainer.id = ""


// fetch names when window load
window.onload=async()=>{
    let response = await  fetch('api/names');
    let result = await response.json();
    questions=result

}

//Start Quiz Function
const startQuiz = function () {
    document.querySelector(".welcome-content").remove();
    mainTest();
    
};



// Main Test Function
const mainTest = function (result) {
    timerEl.textContent = "Score: " + playerScore;
    switch(playerScore) {
        case 20:
          endTest(true)
          break;
        case 0:
            endTest(false)
          break;
        default:
          // code block
      }


    if (counter > questions.length-1 ){
        endTest()
    }else {


        //Clear questions on screen per iteration
        function clearBox() {
            document.getElementById('main-content').innerHTML = ""
        }
        
        clearBox()
        
        // Print out questions and choices
        let question = document.createElement("h1");
        question.className = "question-type";
        question.id = "questionType";
        question.textContent = questions[counter].first_name;
        mainContent.appendChild(question);
        
        let optionOne = document.createElement("button");
        optionOne.className = "quiz-button btn";
        optionOne.id = "quizButton";
        optionOne.textContent = "male";
        mainContent.appendChild(optionOne);
        
        let optionTwo = document.createElement("button");
        optionTwo.className = "quiz-button btn";
        optionTwo.id = "quizButton";
        optionTwo.textContent = "female";
        mainContent.appendChild(optionTwo);
        
        
        
        //Print out the result
        if (counter === 0) {
            console.log('dont do anything')
        } else {
            var resultDiv = document.createElement('div');
            resultDiv.className = "result-div";
            resultDiv.innerHTML = result;
            mainContent.appendChild(resultDiv);
        }
        
        // Fetch the quiz buttons
        quizButtons = document.querySelectorAll("#quizButton") 
        quizButtons.forEach((btn, userAnswer) => {
            btn.addEventListener("click", function () {
                checkResult(userAnswer, questions[counter].Answer)
            });
        });
    }
    };
    
    // Check result function
    
const  checkResult = async function (userAnswer) {

    let response = await  fetch('api/gender/?name='+questions[counter].first_name)
        let result = await response.json();
        let Answer = userAnswer ==0 ? "male" : "female"; 

    if (Answer === result.gender) {

        playerScore=playerScore +1;
        result = "<h2> Correct! </h2>"
    } else {
        playerScore=playerScore -1;
        result = "<h2> Incorrect! </h2>"   
    }
    counter++
    mainTest(result);
}






// End test function
const endTest = function (win) {
    var Endmessage="there is no more names"
    if(win==true){
        Endmessage="you win"

    }else if(win==false){
        Endmessage="you lose"
    }

    // Clear the last quesiton    
    document.getElementById('main-content').innerHTML = ""
    document.getElementById('main-content').setAttribute("class", "hidden");


    //return form container styling
    formContainer.id = "user-input-form"

    // Change the timer to score
        timerEl.textContent = "Score: " + playerScore;
    const score = playerScore.toString()


    // Print out the Form
    const inputInstructions = document.createElement('h2');
    inputInstructions.className = "input-instructions";
    inputInstructions.textContent = Endmessage;
    formContainer.appendChild(inputInstructions)

    const initialsInput = document.createElement('input');
    initialsInput.className = "initials-input";
    initialsInput.setAttribute('placeholder', 'Initials');
    formContainer.appendChild(initialsInput);

    const initialsSubmit = document.createElement('button');
    initialsSubmit.className = "initials-submit";
    initialsSubmit.textContent = "Submit";
    initialsSubmit.setAttribute('type', 'submit');
    formContainer.appendChild(initialsSubmit);

    
    initialsSubmit.addEventListener("click", function (event) {


    })
}


startButton.addEventListener("click", startQuiz);
