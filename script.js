function game(inputOne, inputTwo) {
    const rules = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper',
    };
  
    const valid = ['rock', 'paper', 'scissors'];
  
    if (!valid.includes(inputOne) || !valid.includes(inputTwo)) {
      const errorMessage = 'Invalid input!';
      alert(errorMessage);
      return errorMessage;
    }
  
    if (inputOne === inputTwo) {
      return 'Tie';
    }
    return rules[inputOne] === inputTwo ? 'Player 1 won!' : 'Player 2 won!';
  }
  
  const player1 = prompt('Player 1 choice: ');
  const player2 = prompt('Player 2 choice: ');
  console.log(game(player1, player2));