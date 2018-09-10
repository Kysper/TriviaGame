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
        
            
             var q1 ="Where did Gabe Newell work before getting into game development?";
            var choicesQ1 =["Sony","Microsoft","Google","Government"];
              answer = 1;    
            
            // {
            //     q2:"How many Halo games are currently released?",
            //     choices:["Five","Six","Eight","Ten"],
            //     answer:2   
            // },
            // {
            //     q3:"Where is Dr.Robotnik from?",
            //     choices:["Sonic The Hedgehog","Banjo Kazooie","Donkey Kong","Kirby"],
            //     answer:0   
            // },
            // {
            //     q4:"What is Luigi's girlfriend's name?",
            //     choices:["Dilly","Peach","Shelly","Daisy"],
            //     answer:3    
            // },
            // {
            //     q5:"What game in hours have currently been played more than the entire human exsistance?",
            //     choices:["500 Million Hours","5 Billion Hours","25 Billion Hours","102 Billion Hours"],
            //     answer:2   
            // };
           
            question = $("#question-list").html(q1);
            for(i = 0; i < choicesQ1.length; i++)
            {
                $("#btn-container").append("<button id='choice-"+i+"'>"+choicesQ1[i]+"</button>");
            }
    
}

});


//    var questionRandomizer = questionArray[Math.floor(Math.random()*questionArray.length)];
      
    //        questionArray.splice(questionArray[questionRandomizer], 1);
    //     console.log(questionRandomizer);
        
    //     $("#question-list").text(questionRandomizer);

// function choices()
//     {
//         if(questionArray[0])
//         {
//            choicesQ1 = ["Rare","Activision","Microsoft","IDSoftware"];
//         }
// }
  
// getQuestion();



// function buttonSpawner()
// {   
//     for(i = 0; i <= 4; i++){
//     $(".btn-list").append(button);
//     }
//     getQuestion();

// }

// function countDown()

// {
//     counter = 10;
//     var outOfTime = setInterval(function(){
//         $("#timer").html("Timer: "+ counter);
//     if (counter === 0) {
//         clearInterval(outOfTime);
//         endGame();
//         }
//         counter--
// }, 1000);
//     // showStats();

// }

// });

//  function endGame()
//  {
//      $("#middle-side").html("<h1>Oh no you ran out of time!</h1>");

//  }


// clearInterval(outOfTime);
//    if(!outOfTime || clicked){
//     $(this).on('click', function()
//     {   clicked = false;
//         countDown();
//         getQuestion();
        
    
       
//     });
//     }


