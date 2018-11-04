// let totalScore, currentScore, numberOfClicks = 0

// const startGame = () {

// }

const playRound = (playerSelect, compSelect) => {
  let res
  console.log(`player chooses ${playerSelect} and comp choose ${compPlay}`)
  const headerRes = `Player chooses ${playerSelect} and Computer chooses ${compPlay}`
  document.getElementById('display-choices').textContent = headerRes

  if (playerSelect === 'rock' && compSelect === 'scissors') {
    console.log('Player wins!')
    res = 'Player wins!'
  } else if (playerSelect === 'scissors' && compSelect === 'rock') {
    console.log('computer wins!')
    res = 'Computer wins!'
  } else if (playerSelect === 'scissors' && compSelect === 'paper') {
    console.log('player wins!')
    res = 'Player wins!'
  } else if (playerSelect === 'paper' && compSelect === 'rock') {
    console.log('Player wins')
    res = 'Player wins'
  } else if (playerSelect === 'rock' && compSelect === 'paper') {
    console.log('Computer wins!')
    res = 'Computer wins!'
  } else if (playerSelect === 'paper' && compSelect === 'scissors') {
    console.log('Computer wins!')
    res = 'Computer wins!'
  } else {
    console.log('it\'s a tie!')
    res = 'It\'s a tie!'
  }
  document.getElementById('display-result').textContent = res
}

// document.getElementById('display-result').textContent = res

const options = ['rock', 'paper', 'scissors']

// randomly choose one of above options:
const compPlay = options[Math.floor(Math.random() * options.length)]

const getPlayerId = (el) => {
  const selectedId = el.id
  console.log('playerID', selectedId)

  playRound(selectedId, compPlay)
}

// playRound('paper', compPlay)

// const headerTest = document.querySelector('h2')
// headerTest.textContent = 'Header Test'
// document.getElementById('result').textContent = 'headerRes'
