let playerScore = 0
let compScore = 0
let round = 1

const checkScore = () => {
  let finalRes
  if (playerScore >= 3) {
    finalRes = 'Player is the WINNER!'
    document.getElementById('display-round').textContent = ''
  } else if (compScore >= 3) {
    finalRes = 'Computer is the WINNER'
    document.getElementById('display-round').textContent = ''
  }
  document.getElementById('display-result').textContent = finalRes
  // restart()
}

const playRound = (playerSelect, compSelect) => {
  let res
  console.log(`player chooses ${playerSelect} and comp choose ${compPlay}`)
  const headerRes = `Player chooses ${playerSelect} and Computer chooses ${compPlay}`
  document.getElementById('display-choices').textContent = headerRes

  if (playerSelect === 'rock' && compSelect === 'scissors') {
    res = 'Player wins this round!'
  } else if (playerSelect === 'scissors' && compSelect === 'rock') {
    res = 'Computer wins this round!'
  } else if (playerSelect === 'scissors' && compSelect === 'paper') {
    res = 'Player wins this round!'
  } else if (playerSelect === 'paper' && compSelect === 'rock') {
    res = 'Player wins this round!'
  } else if (playerSelect === 'rock' && compSelect === 'paper') {
    res = 'Computer wins this round!'
  } else if (playerSelect === 'paper' && compSelect === 'scissors') {
    res = 'Computer wins this round!'
  } else {
    res = 'It\'s a tie!'
  }

  // update scoreboard
  switch (res) {
    case 'Player wins this round!' :
      playerScore++
      console.log('playerscore', playerScore)
      document.getElementById('player-score-total').textContent = playerScore
      round++
      document.getElementById('display-round').textContent = `Round ${round}:`
      break
    case 'Computer wins this round!':
      compScore++
      console.log('compscore', compScore)
      document.getElementById('comp-score-total').textContent = compScore
      round++
      document.getElementById('display-round').textContent = `Round ${round}:`
      break
  }
  checkScore()

  // document.getElementById('display-result').textContent = res
}

// options for computer:
const options = ['rock', 'paper', 'scissors']
const compPlay = options[Math.floor(Math.random() * options.length)]

// get option selected by player and start game:
const getPlayerId = (el) => {
  const selectedId = el.id
  console.log('playerID', selectedId)

  playRound(selectedId, compPlay)
}
