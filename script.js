//Global Constants
const clueHoldTime = 1000; // how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between cues
const nextClueWaitTime = 1000; //how long to wait before playing sequence

//Global Variables
 //sequence pattern of the game buttons
var pattern = [1,1,2,1,4,1,4,3];
 //counter for successive pattern guessing
var progress = 0;
 //status of the game (active/inactive)
var gamePlaying = false;
 //keeps track of tone playing status
var tonePlaying = false;
var volume = 0.5; //range: 0.0 to 1.0
var guessCounter = 0; //tracks guesses of user in sequence

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  
    
    playClueSequence();
    if(onclick != null){
      guess(onclick);
    }
    
    
    
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

//
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    // built-in Js function to schedule execution of clue process
    setTimeout(clearButton,clueHoldTime,btn)}
}

//iterates for loop to play each cue
//progress keeps track of turn number
function playClueSequence(){
  guessCounter = 0;
  // removed: context.resume();
  let delay = nextClueWaitTime; // sets delay to initial wait time
  for(let i = 0; i <= progress; i++){
    //for each clue revealed so far
    console.log("play single clue: "+ pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue in the future
    //delay spaces out the execution of each cue in sequence
    delay += clueHoldTime;
    delay += cluePauseTime;
    
  }
}

function guess(btn){
  console.log("user guessed: "+btn);
  //checks if game is still active 
  if(!gamePlaying){return;}
  //game logic:

  //is guess correct?
  if(btn == pattern[guessCounter]){
    console.log("correct guess");
    //guess is correct --> is the turn over?
    if(guessCounter == progress){
        // turn is over --> is this the last turn?
        console.log("turn is over");
        if(progress == pattern.length - 1){
          //win game
          winGame();
        }
        else{
          //not the last turn --> add next part of sequence
          progress++;
          playClueSequence();
        }
    }
    else{
      //turn is not over --> check the next guess
      guessCounter++;
    }
  }
  //incorrect guess --> lose game
  else{
    loseGame();}
}

function loseGame(){
  stopGame();
  alert("Game Over. You Lost."); // built in Js function for popup dialog box containing message. 
  
}

function winGame(){
  stopGame();
  alert("WINNER: YOU!!!");
}



// Sound Synthesis Functions
  //numbers correspond to pitch (sound frequencies)
const freqMap = {
  1: 114,
  2: 150,
  3: 230,
  4: 137
}

//chooses one of the four button numbers and plays tone for a specified time
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

//first step of tone that continues playing until stopTone()
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

//stops the sound played by startTone()
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)