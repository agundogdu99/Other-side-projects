// Credit Card Masking Task
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
// However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    ccArray = cc.split('')
    console.log(ccArray)
    for (i = 0; i < ccArray.length - 4; i++) {
      ccArray[i] = '#'
    }
      cc = ccArray.join('')
      return cc
    }
  
    console.log(maskify('4654131231654684'))
  
    // let x = "hahahaha"
    // xo = '#' + x.slice(1)
    // console.log(xo)
    



// Pangram Task
// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


    function isPangram(string){
        let alphabetArray = new Set("abcdefghijklmnopqrstuvwxyz")
        let value;
        for (let letter of string.toLowerCase()) {
            alphabetArray.delete(letter)
            // if (alphabetArray.size < 1) {
            //     value = true
            // } else {
            //     value = false
            // }
            
        }
        return alphabetArray.size === 0
      }
    console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))

// OR -------------

    function isPangram(string) {
        let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('');
        for (let letter of string.toLowerCase()) {
          let index = alphabetArray.indexOf(letter);
          if (index !== -1) {
            alphabetArray.splice(index, 1);
          }
        }
        return alphabetArray.length === 0;
      }
      console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))

    // OR ----------

    function isPangram(string){
        string = string.toLowerCase();
        return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
          return string.indexOf(x) !== -1;
        });
      }


    //   _if test      
    //   Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
    //   When bool is truthy, func1 should be called, otherwise call the func2

      function _if(bool, func1, func2) {
  if (bool) {
    return func1()
  } else {
    return func2()
  }
}
// OR --------
const _if = (bool, func1, func2) => bool ? func1():func2()




      
