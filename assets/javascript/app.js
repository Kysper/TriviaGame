// Waits for document to fully load before executing this script
$(document).ready(function () {
// Question Object Array can add any amount to it.
    questions = [{
        question: "Where did Gabe Newell work before getting into game development?",
        choices: ["Sony", "Microsoft", "Google", "Government"],
        answer: ['btns-1',"Microsoft"]
    },
    {
        question: "How many Halo games are currently released?",
        choices: ["Five", "Six", "Eight", "Ten"],
        answer: ['btns-2',"Eight"]
    },
    {
        question: "Where is Dr.Robotnik from?",
        choices: ["Sonic The Hedgehog", "Banjo Kazooie", "Donkey Kong", "Kirby"],
        answer: ['btns-0','Sonic The Hedgehog']
    },
    {
        question: "What is Luigi's girlfriend's name?",
        choices: ["Dilly", "Peach", "Shelly", "Daisy"],
        answer: ['btns-3',"Daisy"]
    },
    {
        question: "What game in hours have currently been played more than the entire human exsistance?",
        choices: ["500 Million Hours", "5 Billion Hours", "25 Billion Hours", "102 Billion Hours"],
        answer: ['btns-2',"25 Billion Hours"]
    },
    {
        question:"What game was one of the first MMO open world games that change MMO's forever? Hint: it came out in 1996",
        choices:["Merdian65","Everquest","WoW","Ultima Online"] ,
        answer:["btns-3","Ultima Online"]
    },
    {
        question:"What is the name of the main character in Tomb Raider?" ,
        choices: ["Lara Croft","Denise Croft"," Amanda Croft","Lauren Croft"],
        answer: ["btns-0","Lara Croft"]
    },
    {
        question:"What does Atari mean?",
        choices: ["Power","Greatness","Success","Amazing"],
        answer: ["btns-2","Successs"],
    },
    {
        question:"What is the name of the game that the mod 'Counter-Strike' is made from?",
        choices: ["Halo","Half-Life","Doom","Hexen"],
        answer: ["btns-1","Half-Life"],
    },
    {
        question:"In Homefront the game who was the enemy attacking the United States?",
        choices: ["China","Russia","North Korea","Japan"],
        answer: ["btns-2","North Korea"]
    }];

    resetGame();
    startGame();


// Beginning of game resets all the numbers of the counters and updates for each question and time
function resetGame() {
    timeToWait = 2000;
    counter = 120;
    currentQuestion = 0;
    correctChoice = 0;
    incorrectChoice = 0;
    answersMissed = questions.length - incorrectChoice + correctChoice;
    

    
}

    // Start Button and timer starter
    function startGame() {
        
        $("#start-button").html("<button id='btn-style'>Start Game</button>");
        $("#start-button").on('click', function () {
        $("#start-button").remove();
        startTimer();
        getQuestion();
        });
    }

    // Adds questions and cycles a for loop to create the buttons made with each choice on them to the HTML file
    function getQuestion() {
        if (currentQuestion >= questions.length) {
            endGame();
        }
        else {

            $("#question-list").append(questions[currentQuestion].question);
            for (i = 0; i < questions[currentQuestion].choices.length; i++) {
                $("#btn-container").append("<button class='choices' id='btns-"+i+"' type='submit'>" + questions[currentQuestion].choices[i] + "</button>");
            }
            choiceChecker();
        }
    }

    function answerScreenTimeOut(){
        setTimeout(function () {
        $(".middle-side").empty();
        $(".middle-side").html("<h1 id='timer'></h1>");
        $(".middle-side").append('<div id="question-list"></div>');
        $(".middle-side").append('<div id="btn-container">');
        getQuestion();
    }, timeToWait);

}

    // Waits for click on one of the choices then checks the answer of the currentQuestion 
    function choiceChecker() {

        $(".choices").on('click', function () {
            console.log(this.id);
            if (this.id == questions[currentQuestion].answer[0]) {
                console.log("I fire")
                $(".middle-side").html("<h1>That's right! Congrats!</h1>");
                currentQuestion++;
                correctChoice++;
                answerScreenTimeOut();
               

            }
            else {
                
                $(".middle-side").html("<h1>Oh no that's not right</h1>");
                $(".middle-side").html("<h1>The correct answer was " + questions[currentQuestion].answer[1] + "</h1>");
                incorrectChoice++;
                currentQuestion++;
                answerScreenTimeOut();
                
                
            }
        });
    }
    function startTimer() {

        outOfTime = setInterval(function () {
            $("#timer").html("Timer: " + counter);
            if (counter === 0) {
                endGame();
            }
            counter--
        }, 1000);
    }
    function endGame() {
        timeToWait = 6000;
        if(counter === 0){
        $(".middle-side").html("<h1>Oh no you ran out of time!</h1><br><br>");
        }
        else
        {
            $(".middle-side").html("<h1>Congrats you ran out of questions!</h1><br><br>");
        }
        sumOfAnswered = incorrectChoice + correctChoice;
        answeredSubtracted = questions.length - sumOfAnswered;
        answersMissed = answeredSubtracted;
        $("#correct").text("Correct: " + correctChoice);
        $("#incorrect").text("Incorrect: " + incorrectChoice);
        $("#answers-missed").text("Incomplete: " + answersMissed);
        clearInterval(outOfTime);    
        resetGame();
        startTimer();
        answerScreenTimeOut();
        
    }
});

