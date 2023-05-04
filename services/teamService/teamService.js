function teamRandomizer({ numberOfTeams, users }) {
    let teams = [];
    const shuffledUsers = shuffle(users);

    
    return divideArrayIntoNParts({ originalArray: shuffledUsers, n: numberOfTeams })
}

function divideArrayIntoNParts({ originalArray, n }) {
    const subArrayLength = Math.ceil(originalArray.length / n); // calculate the length of each subarray
    const resultArray = []; // initialize an empty array to store the subarrays
    
    for (let i = 0; i < n; i++) {
      const startIndex = i * subArrayLength;
      const endIndex = (i + 1) * subArrayLength;
      const subArray = originalArray.slice(startIndex, endIndex);
      resultArray.push(subArray);
    }
  
    return resultArray;
  }

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

module.exports = {
    teamRandomizer
};