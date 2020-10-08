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



// 00 10 10 10 10 0000000010 0010111010 0010111010 0000111111 -> hello
//    .   .  .  .

function decode(expr) {
  return expr.split('**********').map( word => {
      let morseWord = '';
      for(let i = 0; i < word.length; i += 2) {
          if( word[i] + word[i + 1] === '10') morseWord += '.';
          if( word[i] + word[i + 1] === '11') morseWord += '-';
          if( ((i + 2) % 10) == 0) morseWord += ' ';
      }
      morseWord = morseWord.split(' ').map( v => {
       return MORSE_TABLE[v];
     }).join('');
      return morseWord;
  }).join(' ');
}

module.exports = {
    decode
}