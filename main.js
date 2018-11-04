
const playRound = (playerSelect, compSelect) => {
  let res
  console.log(`player chooses ${playerSelect} and comp choose ${compPlay}`)
  const headerRes = `Player chooses ${playerSelect} and Computer chooses ${compPlay}`
  document.getElementById('display-choices').textContent = headerRes

  if (playerSelect === 'rock' && compSelect === 'scissors') {
    res = 'Player wins!'
  } else if (playerSelect === 'scissors' && compSelect === 'rock') {
    res = 'Computer wins!'
  } else if (playerSelect === 'scissors' && compSelect === 'paper') {
    res = 'Player wins!'
  } else if (playerSelect === 'paper' && compSelect === 'rock') {
    res = 'Player wins'
  } else if (playerSelect === 'rock' && compSelect === 'paper') {
    res = 'Computer wins!'
  } else if (playerSelect === 'paper' && compSelect === 'scissors') {
    res = 'Computer wins!'
  } else {
    res = 'It\'s a tie!'
  }
  document.getElementById('display-result').textContent = res
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
