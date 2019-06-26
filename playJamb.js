
let dice1, dice2, dice3, dice4, dice5, dice6;
let dice11, dice22, dice33, dice44, dice55, dice66;

let activePlayer, gameAct1, gameAct2;

let diceDOM1, diceDOM2, diceDOM3, diceDOM4, diceDOM5, diceDOM6;
let gamePlaying1, gamePlaying2, gamePlaying3;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {

    if (gamePlaying1) {

     diceDOM1.style.display = "block";
     diceDOM2.style.display = "block";
     diceDOM3.style.display = "block";     
     diceDOM4.style.display = "block";
     diceDOM5.style.display = "block";
     diceDOM6.style.display = "block";       
    }
 
    gamePlaying1 = false;    

})

function readText() {
  document.getElementById("dicing1").title = "CLICK - dice stay in game, DOUBLE CLICK - cancel";
  document.getElementById("dicing2").title = "CLICK - dice stay in game, DOUBLE CLICK - cancel";
  document.getElementById("dicing3").title = "CLICK - dice stay in game, DOUBLE CLICK - cancel";
  document.getElementById("dicing4").title = "CLICK - dice stay in game, DOUBLE CLICK - cancel";
  document.getElementById("dicing5").title = "CLICK - dice stay in game, DOUBLE CLICK - cancel";
  document.getElementById("dicing6").title = "CLICK - dice stay in game, DOUBLE CLICK - cancel";      
}

// second and third roll
function stayInGame1() {
	diceDOM1.classList = "second";
}
function stayTheSame1() {
  diceDOM1.classList = "dice1"; ;  
}

function stayInGame2() {
    diceDOM2.classList = "second";	
}
function stayTheSame2() {
  diceDOM2.classList = "dice2"; ;  
}

function stayInGame3() {
	diceDOM3.classList = "second";
}
function stayTheSame3() {
  diceDOM3.classList = "dice3"; ;  
}

function stayInGame4() {
    diceDOM4.classList = "second";	
}
function stayTheSame4() {
  diceDOM4.classList = "dice4"; ;  
}

function stayInGame5() {
	diceDOM5.classList = "second";
}
function stayTheSame5() {
  diceDOM5.classList = "dice5"; ;  
}

function stayInGame6() {
    diceDOM6.classList = "second";	
}
function stayTheSame6() {
  diceDOM6.classList = "dice6"; ;  
}

// second roll
document.querySelector(".btn-scnd").addEventListener("click", function() {
  if (gamePlaying2) {
  rollAgain();    
  }
  gamePlaying2 = false;
});

// third roll
document.querySelector(".btn-last").addEventListener("click", function() {
  if (gamePlaying3) {
  rollAgain();    
  }
  gamePlaying3 = false;
});


function nextPlayer() {
  activePlay();


           
;
    gamePlaying1 = true;
    gamePlaying2 = true;
    gamePlaying3 = true;

   
    if (diceDOM1.className === "second") {
    diceDOM1.className = "dice1";      
    };
    if (diceDOM2.className === "second") {
    diceDOM2.className = "dice2";      
    };
    if (diceDOM3.className === "second") {
    diceDOM3.className = "dice3";      
    };
    if (diceDOM4.className === "second") {
    diceDOM4.className = "dice4";      
    };
    if (diceDOM5.className === "second") {
    diceDOM5.className = "dice5";      
    };
    if (diceDOM6.className === "second") {
    diceDOM6.className = "dice6";      
    };                    

 
  document.querySelector(".dice1").style.display = "none";
  document.querySelector(".dice2").style.display = "none";
  document.querySelector(".dice3").style.display = "none";
  document.querySelector(".dice4").style.display = "none";
  document.querySelector(".dice5").style.display = "none";
  document.querySelector(".dice6").style.display = "none"; 

rollAgain();  

}


function activePlay() {

    if (activePlayer === 0) {
      gameAct1 = false;
      gameAct2 = true;
      activePlayer = 1;
    document.querySelector(".player-1").classList.add("activePl");
    document.getElementById("player2active").style.opacity = "1";
    document.getElementById("player1active").style.opacity = "0.5";    
    document.querySelector(".player-0").classList.remove("activePl");
    document.querySelector(".nextPl2").style.border = "3px solid #333";
    document.querySelector(".nextPl2").style.borderRadius = "10px"; 
    document.querySelector(".nextPl1").style.border = "none";
    document.querySelector(".nextPl1").style.borderRadius = "0";        
    } else {
        activePlayer = 0;
      gameAct2 = false;
      gameAct1 = true;          
    document.querySelector(".player-0").classList.add("activePl");
    document.getElementById("player1active").style.opacity = "1";
    document.getElementById("player2active").style.opacity = "0.5";    
    document.querySelector(".player-1").classList.remove("activePl");
    document.querySelector(".nextPl1").style.border = "3px solid #333";
    document.querySelector(".nextPl1").style.borderRadius = "10px"; 
    document.querySelector(".nextPl2").style.border = "none";
    document.querySelector(".nextPl2").style.borderRadius = "0";            
    }

  

}


function rollAgain() {
		if (diceDOM1.className !== "second") {
        let dice11 = Math.floor(Math.random() * 6) + 1;
				diceDOM1.src = "pictures/dice-" + dice11 + ".png";
		} 
		if (diceDOM2.className !== "second") {
				let dice22 = Math.floor(Math.random() * 6) + 1;
				diceDOM2.src = "pictures/dice-" + dice22 + ".png";
		} 
		if (diceDOM3.className !== "second") {
				dice33 = Math.floor(Math.random() * 6) + 1;	
				diceDOM3.src = "pictures/dice-" + dice33 + ".png";						
		}
		if (diceDOM4.className !== "second") {
				dice4 = Math.floor(Math.random() * 6) + 1;	
				diceDOM4.src = "pictures/dice-" + dice4 + ".png";							
		};
		if (diceDOM5.className !== "second") {
				dice5 = Math.floor(Math.random() * 6) + 1;	
				diceDOM5.src = "pictures/dice-" + dice5 + ".png";					
   		};
		if (diceDOM6.className !== "second") {
				dice6 = Math.floor(Math.random() * 6) + 1;	
				diceDOM6.src = "pictures/dice-" + dice6 + ".png";						
		};	
}

function init() {

    activePlayer = 0; 
 
    gamePlaying1 = true;
    gamePlaying2 = true;
    gamePlaying3 = true;

    gameAct1 = true;
    gameAct2 = false;
   
   	dice1 = Math.floor(Math.random() * 6) + 1;
   	dice2 = Math.floor(Math.random() * 6) + 1;
   	dice3 = Math.floor(Math.random() * 6) + 1;
   	dice4 = Math.floor(Math.random() * 6) + 1;
   	dice5 = Math.floor(Math.random() * 6) + 1;
   	dice6 = Math.floor(Math.random() * 6) + 1;   	   	   	   	   	


    diceDOM1 = document.querySelector(".dice1");
    diceDOM1.src = "pictures/dice-" + dice1 + ".png";
    diceDOM2 = document.querySelector(".dice2");
    diceDOM2.src = "pictures/dice-" + dice2 + ".png";
    diceDOM3 = document.querySelector(".dice3");
    diceDOM2.src = "pictures/dice-" + dice3 + ".png";
    diceDOM4 = document.querySelector(".dice4");
    diceDOM4.src = "pictures/dice-" + dice4 + ".png";
    diceDOM5 = document.querySelector(".dice5");
    diceDOM5.src = "pictures/dice-" + dice5 + ".png";
    diceDOM6 = document.querySelector(".dice6");
    diceDOM6.src = "pictures/dice-" + dice6 + ".png";

  document.querySelector(".dice1").style.display = "none";
  document.querySelector(".dice2").style.display = "none";
  document.querySelector(".dice3").style.display = "none";
  document.querySelector(".dice4").style.display = "none";
  document.querySelector(".dice5").style.display = "none";
  document.querySelector(".dice6").style.display = "none";

    document.querySelector(".player-0").classList.add("activePl");
    document.getElementById("player1active").style.opacity = "1";
    document.querySelector(".nextPl1").style.border = "3px solid #333";
    document.querySelector(".nextPl1").style.borderRadius = "10px";  
}

function playGame() {
  document.getElementById("rules").style.display = "none";
  document.getElementById("game").style.display = "block";  
}
