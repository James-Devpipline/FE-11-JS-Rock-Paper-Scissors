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

  while (gameInPlay) {
    const scores = {
      Player : 0,
      Bot : 0,
      Draws : 0
    }

    
      
    let rpcUserInput = prompt(`Player: ${scores.Player} Bot: ${scores.Bot} Draws: ${scores.Draws} [1] Rock \n[2] Paper \n[3] Scissor \n[Q]uit`)
    
    if (rpcUserInput === "1") {
      alert("user has picked Rock")
    }

    else if (rpcUserInput === "2") {
      alert("user has picked Paper")
    }
        
    else if (rpcUserInput === "3") {
      alert("user has picked Scissor")
    }

    else if (rpcUserInput.toUpperCase() == "Q") {
      alert("Exiting game")
      gameInPlay = !gameInPlay
      alert(gameInPlay)
      console.log(gameInPlay)
    }
        
    else {
      alert("INVALID INPUT")
      console.error("INVALID INPUT")
    }
  
  
    let botWeapon = null
    function botWeaponSelect() {
      const botWeaponNum = Math.floor(Math.random() * (4 - 1) + 1)
      console.log(botWeaponNum)
      if (botWeaponNum === 1){
        botWeapon = "R"
      }
  
      else if (botWeaponNum === 2) {
        botWeapon = "P"
      }
  
      else if (botWeaponNum === 3) {
        botWeapon = "S"
      }
      alert(botWeapon)
    }
      
      
      
    


    function gameRules(userWep, botWep) {
      if (userWep == botWep) {
        alert("Draw!")
        scores.Draws ++
      }

      else if (userWep.toUpperCase() === 'R' && botWep.toUpperCase()  === 'S') {
        alert("Rock beats Scissors! You win!")
        scores.Player ++
        // alert(`Player: ${scores.Player} Bot: ${scores.Bot} Draws: ${scores.Draws}`)
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

    function botRandomNum() {
      return Math.floor(Math.random() * (4 - 1) + 1)
    }

    console.log(botRandomNum())


  

  
  
  
  
  
  
  
  
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