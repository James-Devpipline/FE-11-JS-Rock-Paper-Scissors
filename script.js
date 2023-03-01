/* 

logic table:
  rock v rock: draw
  paper v paper: draw
  scissor v scissor: draw

  rock v scissor: rock wins
  scissor v paper: scissor wins
  paper v rock: paper wins

Player score: 0
Bot score: 0
Draws: 0
*/

function rpcGame() {
  let gameInPlay = true
  const scores = {
    Player : 0,
    Bot : 0,
    Draws : 0
  }

  while (gameInPlay) {
  
  
    let botWeapon = null
    function botWeaponSelect() {
      if (gameInPlay) {
        const botWeaponNum = Math.floor(Math.random() * (4 - 1) + 1)

        if (botWeaponNum === 1){
          botWeapon = "R"
          alert("Bot has chosen Rock")
        }
    
        else if (botWeaponNum === 2) {
          botWeapon = "P"
          alert("Bot has chosen Paper")
        }
    
        else if (botWeaponNum === 3) {
          botWeapon = "S"
          alert("Bot has chosen Scissors")
        }        
      }
    }

    function gameRules(userWep, botWep) {
      if (gameInPlay) {
        if (userWep == botWep) {
          alert("Draw!")
          scores.Draws ++
        }

        else if (userWep.toUpperCase() === 'R' && botWep.toUpperCase()  === 'S') {
          alert("Rock beats Scissors! You win!")
          scores.Player ++
        }
        
        else if (userWep.toUpperCase()  === 'S' && botWep.toUpperCase()  === 'R') {
          alert("Rock beats Scissors! You lose!")
          scores.Bot ++
        }

        else if (userWep.toUpperCase()  === 'S' && botWep.toUpperCase()  === 'P') {
          alert("Scissors beat paper! You win!")
          scores.Player ++
        }

        else if (userWep.toUpperCase()  === 'P' && botWep.toUpperCase()  === 'S') {
          alert("Scissors beat paper! You lose!")
          scores.Bot ++
        }

        else if (userWep.toUpperCase()  === 'P' && botWep.toUpperCase()  === 'R') {
          alert("Paper beats Rock! You win!")
          scores.Player ++
        }
        
        else if (userWep.toUpperCase()  === 'R' && botWep.toUpperCase()  === 'P') {
          alert("Paper beats Rock! You lose!")
          scores.Bot ++
        }
      }
    }


    let rpcUserInput = prompt(`Player: ${scores.Player} Bot: ${scores.Bot} Draw: ${scores.Draws} \n[1] Rock \n[2] Paper \n[3] Scissor \n[Q]uit`)
    let userWeapon = undefined
    
    if (rpcUserInput === "1") {
      alert("You have picked Rock")
      userWeapon = 'R'
    }

    else if (rpcUserInput === "2") {
      alert("You have picked Paper")
      userWeapon = 'P'
    }
        
    else if (rpcUserInput === "3") {
      alert("You have picked Scissor")
      userWeapon = 'S'
    }

    else if (rpcUserInput.toUpperCase() == "Q") {
      console.log(`Player: ${scores.Player} \nBot: ${scores.Bot} \nDraw: ${scores.Draws}`)
      alert("Exiting game")
      alert(`Player: ${scores.Player} \nBot: ${scores.Bot} \nDraw: ${scores.Draws} \n \n \nThese scores will be inside your browsers console log`)
      
      gameInPlay = !gameInPlay
    }
        
    else {
      alert("INVALID INPUT")
      console.error("INVALID INPUT")
    }

    
    botWeaponSelect()
    gameRules(userWeapon,botWeapon)
  }
}

rpcGame()



// if (rpcUserInput === "1") {
//   alert("user has picked Rock")
// }

// else if (rpcUserInput === "2") {
//   alert("user has picked Paper")
// }
    
// else if (rpcUserInput === "3") {
//   alert("user has picked Scissor")
// }

// else if (rpcUserInput.toUpperCase() == "Q") {
//   alert("Exiting game")
//   gameInPlay = !gameInPlay
//   console.log(gameInPlay)
// }
    
// else {
//   alert("INVALID INPUT")
//   console.error("INVALID INPUT")
// }




// function rock