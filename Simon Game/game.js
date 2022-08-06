var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkPattern(userClickedPattern.length-1);
});

function checkPattern(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
        if(gamePattern.length==userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    
    }

    else{
        playSound("wrong");
          
        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumebr = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumebr];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currButton){
    $("#" + currButton).addClass("pressed");

    setTimeout(function(){
        $("#" + currButton).removeClass("pressed");
    }, 100);
}


function startOver(){
    gamePattern=[];
    started=false;
    level=0;
}