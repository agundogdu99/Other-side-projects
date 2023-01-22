// Write a function subLength() that takes 2 parameters, a string and a single character. 
    // The function should search the string for the two occurrences of the character and return the length
    //between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the 
    //character the function should return 0.

// Solution 1
function subLength(string, char) {
  let arrayString = string.split('');
  let count = 0;
  arrayString.forEach(letter => {
    if (letter === char) {
      count++;
    }
    }
  )
  if (count === 2) {
    return (arrayString.lastIndexOf(char) + 1) - (arrayString.indexOf(char))
  } else {
    return 0;
  }
}

// Solution 2
function subLength(string, char) {
    let firstIndex = string.indexOf(char);
    let lastIndex = string.lastIndexOf(char);
    let count = string.split(char).length - 1;
    if (firstIndex !== -1 && lastIndex !== -1 && count === 2) {
      return (lastIndex - firstIndex) + 1;
    } else {
      return 0;
    }
  }
  //console.log(subLength('qwalduyan', 'a'))

// _______________________________________________________________________________________________

// Write a function factorial() that takes a number as an argument and returns the factorial of the number

function factorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
      result = result * i;
      //result *= i;
    }
    return result;
  }
  
  console.log(factorial(3))

  // _________________________________________________________________________________________________

  //Write a function groceries() that takes an array of object literals of grocery items. 
  //The function should return a string with each item separated by a comma except the last 
  //two items should be separated by the word 'and'. Make sure spaces (' ') are inserted 
  //where they are appropriate.

// Solution 1

function groceries(arr) {

    let newArrayString = newArray = arr.map(obj => obj.item).join(', ');

    let lastIndex = newArrayString.lastIndexOf(',')

    let result = newArrayString.replace(/,(?=[^,]*$)/, ' and');
   
     return result;
  }

  console.log(groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]))

 //  Solution 2 - best solution
 
 function groceries(arr) {
    let newArrayString = arr.map(obj => obj.item).join(', ');
    let result = newArrayString.replace(/,(?=[^,]*$)/, ' and');
    return result;
}



// Solution 3 - codecademys solution

const groceries = list => {
    const groceries = list => {
        let listString = ''
      
        for (let i=0; i<list.length; i++) {
          listString += list[i].item;
          if (i < list.length - 2) {
            listString += ', ';
          } else if (i == list.length - 2){
            listString += ' and ';
          }
        }
        
        return listString;
      }
    }

    //or rewritten my way
    function groceries(arr) {
        let newString = '';
        for (let i = 0; i < arr.length; i++) {
          newString += arr[i].item
          if (i < arr.length - 2) {
            newString += ', ';
          } else if (i === arr.length - 2) {
            newString += ' and '
          }
        }
        return newString;
     }
     


// _________________________________________________________________________________________________


// Function to check Luhn Algortihm on an array of card numbers

function validateCred(arr) {
    let totalMultiplied = 0;
    for (let i = arr.length - 2; i >= 0; i -= 2) {
      if ((arr[i] * 2) > 9) {
        arr[i] = arr[i] * 2;
        totalMultiplied += (arr[i] - 9)
      } else {
        totalMultiplied += (arr[i] * 2);
      }
    }
      let totalStatic = 0;
    for (let i = arr.length - 1; i >= 0; i -= 2) {
      totalStatic += arr[i];
    }
    if ((totalMultiplied + totalStatic)  % 10 === 0) {
        return true;
      } else {
        return false;
      }
  }

// Function to validate a batch of card numbers

  function findInvalidCards(arrays) {
    let invalidCardsArray = []
  
    for (let i = 0; i < arrays.length ; i++) {
      let j = 0
      while (j < arrays[i].length) {
        if (validateCred(arrays[i]) === false) {
        invalidCardsArray.push(arrays[i])
        
      }
      j++
      }
    }
}

