const playRound = (playerSelect, compSelect) => {
  console.log(`player chooses ${playerSelect} and comp choose ${compPlay}`)
  if (playerSelect === 'rock' && compSelect === 'scissors') {
    console.log('Player wins!')
  } else if (playerSelect === 'scissors' && compSelect === 'rock') {
    console.log('comp wins!')
  } else if (playerSelect === 'scissors' && compSelect === 'paper') {
    console.log('player wins!')
  } else if (playerSelect === 'paper' && compSelect === 'rock') {
    console.log('player wins')
  } else if (playerSelect === 'rock' && compSelect === 'paper') {
    console.log('comp wins!')
  } else if (playerSelect === 'paper' && compSelect === 'scissors') {
    console.log('comp wins!')
  } else {
    console.log('it\'s a tie!')
  }
}
const options = ['rock', 'paper', 'scissors']
const compPlay = options[Math.floor(Math.random() * options.length)]
const playerSelect = 'rock'

playRound('paper', compPlay)
