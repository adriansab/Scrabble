class Scrabble {
  constructor(word) {
    // Initialize the Scrabble object with the provided word
    this.word = word;
    this.points = 0; // Initialize the points to 0
    this.splittedWord = []; // Initialize an empty array to store the split word

    // Initialize arrays with letters and their corresponding point values
    this.onePointers = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
    this.twoPointers = ['d', 'g'];
    this.threePointers = ['b', 'c', 'm', 'p'];
    this.fourPointers = ['f', 'h', 'v', 'w', 'y'];
    this.fivePointers = ['k'];
    this.eightPointers = ['j', 'x'];
    this.tenPointers = ['q', 'z'];
  }

  score() {
    // Calculate the score of the word
    if (this.word === '' || this.word === null) {
      // If the word is empty or null, return 0 points
      return 0;
    } else {
      this.splitWord(); // Split the word into an array of letters
      this.addPoints(this.onePointers, 1); // Add points for letters in the onePointers array
      this.addPoints(this.twoPointers, 2); // Add points for letters in the twoPointers array
      this.addPoints(this.threePointers, 3); // Add points for letters in the threePointers array
      this.addPoints(this.fourPointers, 4); // Add points for letters in the fourPointers array
      this.addPoints(this.fivePointers, 5); // Add points for letters in the fivePointers array
      this.addPoints(this.eightPointers, 8); // Add points for letters in the eightPointers array
      this.addPoints(this.tenPointers, 10); // Add points for letters in the tenPointers array
      return this.points; // Return the total points
    }
  }

  splitWord() {
    // Split the word into an array of letters and store it in the splittedWord property
    this.splittedWord = this.word.trim().toLowerCase().split('');
  }

  addPoints(lettersArray, lettersValue) {
    // Add points for each letter in the lettersArray with the specified lettersValue
    for (let i = 0; i < this.splittedWord.length; i++) {
      // Iterate over each letter in the splittedWord array
      for (let j = 0; j < lettersArray.length; j++) {
        // Iterate over each letter in the lettersArray
        if (this.splittedWord[i] == lettersArray[j]) {
          // If the letter matches a letter in the lettersArray
          this.points = this.points + lettersValue; // Add the lettersValue to the total points
        }
      }
    }
  }
}

export default Scrabble;
