function playGuessingGame(x, y) {

  let numToGuess = x;
  let totalGuesses = y;
  
  let promptText = "Enter a number between 1 and 100."

  //for loop. Checks to see if the user doesn't enter anything
  //or if the user enters a number that is not a number

  for (let guesses = 1; guesses < totalGuesses; guesses++) {
    //check if the user doesn't enter anything.  If they do not enter anything, exist
    let num = prompt(promptText);

    if (num === null) {
      return 0;
    }

    // checks to see if the value they entered is a number
    else if (num === "" || isNaN(num)) {
      num = prompt(promptText = "Please enter a number");
      guesses--;
    } else if (num > numToGuess) {
      guesses++;
      num = prompt(promptText = "Please enter a number");
      num = prompt(num + " is too large. Guess a smaller number.");
    } else if (num < numToGuess) {
      guesses++;
      num = prompt(promptText = "Please enter a number");
      num = prompt(num + " is too small. Guess a smaller number.");
    }  else {
      promptText = "This is not working correctly";
      }

      }

    return guesses;
  }

  var randomNum = Math.random() * 11 | 0,
    totalGuesses = 10;

  console.log("The random number is: " + randomNum);
  totalGuesses = prompt("How many guesses would you like to make?")

  playGuessingGame(randomNum, totalGuesses);