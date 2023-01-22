// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};





// Factory to create specimens with random DNA using above functions

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    // Mutate Function which selects a random instance in the generated DNA sequence, and replaces one of the letters
    mutate() {
      let randomNumber
      let mutatedDna
      do {
        randomNumber = Math.floor(Math.random() * (this.dna.length-1));
        mutatedDna = returnRandBase();
      } while (mutatedDna === this.dna[randomNumber]) {
        this.dna[randomNumber] = mutatedDna;
        return this.dna
      }
    },

    // Compares 2 different Paqeurs DNA and logs the % of similarity

    compareDNA(pAequor) {
    
      let similarities;
      let counter = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          counter++
        }
      }

      similarities = Math.round(counter / this.dna.length * 100)
      console.log(`The similarities between specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} is ${similarities}%`)

    },

    // Method to check if there is at least 60% 'C' or 'G' bases in paquers DNA

    willLikelySurvive () {
      let survivalCount = 0;
      for (let i = 0; i < dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          survivalCount++
        }
      }

      if (((survivalCount / 15) * 100)  > 60) {
        return true;
      } else {
        return false
      }

    }

  }
}

//       let spec1 = pAequorFactory(1, mockUpStrand())
//       let spec2 = pAequorFactory(2, mockUpStrand());

// spec1.compareDNA(spec2)
// console.log(spec1.willLikelySurvive())


let healthyPaequor = 0;
let healthyPaequorArr = []
let specimenNumer = []
let specimenObjects = {}
let x = 1;

while(healthyPaequorArr.length < 30) {
  let newSpecimen = pAequorFactory(x, mockUpStrand())
  if (newSpecimen.willLikelySurvive()) {
    healthyPaequorArr.push(newSpecimen.dna)
    specimenNumer.push(newSpecimen.specimenNum)
    specimenObjects[x-1] = newSpecimen
    x++
  }
}

console.log(healthyPaequorArr)
console.log(specimenNumer)

console.log(specimenObjects)

// If you’d like to challenge yourself further, you could consider the following:

//     Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. (Check the hint for more details)
//     Use the .compareDNA() to find the two most related instances of pAequor.

// DNA sequences are found in nature as double-stranded structures (helices). The rules are that 'A' bases bind with 'T' bases (and vice versa) and 'C' bases bind with 'G' bases (and vice versa).

// Suppose we have two strands of DNA, we’ll call them strand1 and strand2. If the strand1’s first base is an 'A', then the strand2’s opposing base is a 'T'. If the second spot of strand1 is a 'C', then strand2’s opposing base is a 'G'.

// To show this as part of your code, if a .dna sequence is:

// [ 'T', 'A', 'C', 'A', 'G', 'A', 'T', 'A', 'C', 'G', 'A', 'C', 'G', 'A', 'T' ]

// Then .complementStrand() should return:

// [ 'A', 'T', 'G', 'T', 'C', 'T', 'A', 'T', 'G', 'C', 'T', 'G', 'C', 'T', 'A' ]