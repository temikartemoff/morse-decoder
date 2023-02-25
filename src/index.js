const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resArray = [];
    for (let i = 0; i < expr.length; i += 10) {
      resArray.push(expr.slice(i, i + 10)); 
    }    
    let col = [];
    for (elem of resArray) {
      let sum = 0;
      for (let i=0; i<elem.indexOf('1'); i++) {  
        sum += 1
      }  
      col.push(elem.slice(sum));
    }
    let morseCode = (col.join().replaceAll('10', '.').replaceAll('11', '-').replaceAll('**********', ' ')).split(',');    
    let decoded = [];
      for(let x = 0; x < morseCode.length; x++){
          if(MORSE_TABLE[morseCode[x]]){
              decoded.push( MORSE_TABLE[morseCode[x]] );
          }  else if (morseCode[x] === ' ') {
              decoded.push(' ');
          }
      }
    return decoded.join('').toLowerCase();
};

module.exports = {
    decode
}