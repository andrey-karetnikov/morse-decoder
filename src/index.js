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
    let result = [];

    for (let j = 0; j < expr.length; j = j + 10) {
        let newString = [];

        for (let i = 0; i < 9; i = i + 2) {
            if (expr[j + i] === '1' && expr[j + i + 1] === '0') {
                newString.push('.');
            } else if (expr[j + i] === '1' && expr[j + i + 1] === '1') {
                newString.push('-');
            } else if (expr[j + i] === "*") {
                newString.push(' ');
            } 
        }

        result.push(MORSE_TABLE[newString.join('')]);

    }

    for (let w = 0; w < result.length; w++) {
      if (result[w] === undefined) result[w] = ' ';
    }

    return result.join('');

}

module.exports = {
    decode
}