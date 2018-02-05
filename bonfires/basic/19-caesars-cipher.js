/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * 
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
 * Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 */

function rot13(str) { 
    const strArray = str.split('');

    for (let i = 0; i < str.length; i++) {
        // Get characted code of each letter in a string
        const charCode = str.charCodeAt(i);

        // Subtract 13 from each letter, get letter value from the subtracted charCode, 
        // and replace character in the string array with the decoded character
        if(charCode < 65 || charCode > 90) {
            var decodedCharCode = String.fromCharCode(charCode);
            strArray[i] = decodedCharCode;
        }
        else if(charCode > 77) {
            var decodedCharCode = String.fromCharCode(charCode - 13);
            
            strArray[i] = decodedCharCode;
        }
        else {
            var decodedCharCode = String.fromCharCode(charCode + 13);
            strArray[i] = decodedCharCode;
        }
        


        

        // Convert array into new string
    }

    return strArray.join('');
}

rot13('SERR PBQR PNZC');

module.exports = rot13;