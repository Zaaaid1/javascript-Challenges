// Challenge your age in days


function ageInDays(){
const birthyear = prompt("what year you were born");
const ageInDayss = (2021 - birthyear) * 365;
const h1 = document.createElement('h1');
const textanswer = document.createTextNode('you are' + ageInDayss+ 'days old');
h1.setAttribute( 'id' ,'ageInDays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge-2
function rpsGame(yourChoice) {
   console.log(yourChoice);
   var humanChoice, botChoice;
   humanChoice = yourChoice.id;
   botChoice = numberToChoice(randToRpsInt());
   console.log('Computer choice:', botChoice);
   results = decideWinner(humanChoice, botChoice); //[0 , 1]  humanlost | botwon
   console.log(results);
   message = finalMessage(results);          // {message: 'youwon', 'color': green}
   console.log(message);

   rpsFrontEnd(yourChoice.id, botChoice, message);
   
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice (number) {
    return [ 'rock', 'paper', 'scissors'] [number];
}

function decideWinner(yourChoice, computerChoice) {
     var rpsDatabase = {
         'rock':  {'scissors': 1, 'rock': 0.5, 'paper':0},
         'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
         'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
     };

   var yourScore = rpsDatabase[yourChoice] [computerChoice];
   var computerScore = rpsDatabase[computerChoice][yourChoice];
   
   return [yourScore, computerScore];
}
    
function finalMessage([yourScore, computerScore]) {
    if (yourScore ===0) {
        return{'message' : 'youlost!','color': 'red'};
    } else if (yourScore === 0.5){
        return { 'message': 'youtied!', 'color': 'yellow'};
    }else {
        return {'message':'youwon!', 'color': 'green'}
    }
}


function rpsFrontEnd(humanImageChoice, botImagechoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src, 
        'paper': document.getElementById('paper').src, 
        'scissors': document.getElementById('scissors').src
        
        }
        
        // let's remove all the image
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');

        humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
       messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] +"</h1>"
        botDiv.innerHTML = "<img src='" + imagesDatabase[botImagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
        
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);


}

// challenge 3:  change the color of all buttons //
 

var all_buttons = document.getElementsByTagName('button');


const copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
  if (buttonThingy.value === 'red') {
      buttonsRed();
  } else if (buttonThingy.value === 'green') {
      buttonsGreen(); 

  }  else if (buttonThingy.value === 'blue') {
    buttonsBlue(); 

  } else if (buttonThingy.value === 'reset') {
      buttonsColorReset();

  } else if (buttonThingy.value === 'random') {
      randomColors();
  }
}

function buttonsRed() {
    for (let i= 0 ; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i= 0 ; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonsBlue() {
    for (let i= 0 ; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}


function buttonsColorReset() {
    for (let i= 0 ; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
     let choices  = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i= 0 ; i < all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }

}
