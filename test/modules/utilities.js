// export function formatNumber(num) {
//     let numString = num.toString();
//   let numLength = numString.length;
//   let commaIndex = numLength % 3;

//   if (numLength <= 3) {
//     return numString;
//   } else {
//     let formattedString = numString.substring(0, commaIndex);
//     for (let i = commaIndex; i < numLength; i += 3) {
//       formattedString += ',' + numString.substring(i, i + 3);
//     }
//     return formattedString;
// }
// }


export function formatNumber(number) {
    let str = String(number);
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      if (i > 0 && i % 3 === str.length % 3) {
        result += ',';
      }
      result += str.charAt(i);
    }
    
    return result;
  }