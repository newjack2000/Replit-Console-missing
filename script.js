function playGuessingGame(numToGuess, totalGuesses = 10) {
  let promptText = "Enter a number between 1 and 100."

  // this section will be fo the loop.

  for (let guesses = 1; guesses < totalGuesses; guesses++) {
    let num = prompt(promptText)

    // check if the user does not enter anything and exists if nothing is entered

    if (num == null) {
      console.log("The guess count is: " + guesses)
      return 0
    }

    // checks to see if the value the enter is a number

    else if (num == "" || isNaN(num)) {
      promptText = "Please enter a number:"
      console.log("The guess count is: " + guesses)
      guesses = guesses - 1
    }

    else if (num === numToGuess) {
      console.log("The guess count is: " + guesses)
      return guesses
    }

    else if (num < numToGuess) {
      console.log(num + " is too small. Guess a larger number.")
      console.log("The guess count is: " + guesses)
    }

    else if (num > numToGuess) {
      console.log(num + " is too large. Guess a smaller number")
      console.log("The guess count is: " + guesses)
    }

  }

    return guesses;
  }