$(document).ready(function()
{



resetGame();

function resetGame()
{
    gameCounter = 120;
    questionCounter = 30;

    
   
    startGame();
}

function startGame()
{ $("#start-button").html("<button id='btn-style'>Start Game</button>");
    $("#start-button").on('click', function()
    {$("#start-button").hide();
        getQuestion();
    });
} 


function getQuestion()
{
        
           questions=[{
                 question:"Where did Gabe Newell work before getting into game development?",
                choices:["Sony","Microsoft","Google","Government"],
                answer:"Microsoft"},  
            
            {
                question:"How many Halo games are currently released?",
                choices:["Five","Six","Eight","Ten"],
                answer:"Eight"   
            },
            {
                question:"Where is Dr.Robotnik from?",
                choices:["Sonic The Hedgehog","Banjo Kazooie","Donkey Kong","Kirby"],
                answer:"Sonic The Hedgehog"   
            },
            {
                question:"What is Luigi's girlfriend's name?",
                choices:["Dilly","Peach","Shelly","Daisy"],
                answer:"Daisy"    
            },
            {
                question:"What game in hours have currently been played more than the entire human exsistance?",
                choices:["500 Million Hours","5 Billion Hours","25 Billion Hours","102 Billion Hours"],
                answer:"25 Billion Hours"   
            }];
           

                $("#question-list").html(questions[0].question);
                for(i = 0; i < questions[currentQuestion = 0].choices.length; i++)
                {
                    $("#btn-container").append("<button id='choice"+i+"'>"+questions[currentQuestion = 0].choices[i]+"</button>")
                }
                console.log(questions[currentQuestion = 0].choices);
                startTimer();
                console.log(questions[currentQuestion  = 0].question);
    
}

});

function choiceChecker()
{
    if(question[currentQuestion].answer)
}

function startTimer()
{
    counter = 120;
    var outOfTime = setInterval(function(){
        $("#timer").html("Timer: "+ counter);
    if (counter === 0) {
        clearInterval(outOfTime);
        endGame();
    }
            counter--
    },1000);

}
 
function endGame()
 {
     $("#middle-side").html("<h1>Oh no you ran out of time!</h1>")
     $("#middle-side").append("<div>The correct answer was "+ questions[currentQuestion].answer+"</div>")
 }

