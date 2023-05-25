function teamRandomizer({ numberOfTeams, users, options }) {
  const shuffledUsers = shuffle(users);


  return options == 'dota2' ? divideArrayIntoNPartsDota2({ originalArray: shuffledUsers }) : divideArrayIntoNParts({ originalArray: shuffledUsers, n: numberOfTeams })
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

function divideArrayIntoNPartsDota2({ originalArray }) {
  const validSubarrayLengths = [5,3,2,1];
  const resultArray = []; // initialize an empty array to store the subarrays

  let currentIndex = 0;
  while (currentIndex < originalArray.length) {
    const remainingElements = originalArray.length - currentIndex;
    let subArrayLength;

    // Find the largest valid subarray length that fits within the remaining elements
    for (const length of validSubarrayLengths) {
      if (remainingElements >= length) {
        subArrayLength = length;
        break;
      }
    }

    const subArray = originalArray.slice(currentIndex, currentIndex + subArrayLength);
    
    resultArray.push(subArray);

    currentIndex += subArrayLength;
  }

  return resultArray;
}


function shuffle(array) {
  let currentIndex = array.length, randomIndex;

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

function buildResponseString({ teams }) {
  let output = '';
  for (let i = 0; i < teams.length; i++) {
    const teamNumber = i + 1;
    const teamName = `Team ${teamNumber}:`;

    output += `**${teamName}**\n`;

    teams[i].forEach(user => {
      output += `${user}\n`;
    });
  }
  return output;
}

module.exports = {
  teamRandomizer,
  buildResponseString
};