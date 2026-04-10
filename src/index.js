const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const wordSeparator = '**********';

  const decodeWord = (word) => {
    const letters = [];
    for (let i = 0; i < word.length; i += 10) {
      const letterBlock = word.slice(i, i + 10);

      let morse = '';

      for (let j = 0; j < letterBlock.length; j += 2) {
        const pair = letterBlock.slice(j, j + 2);

        if (pair === '10') morse += '.';
        else if (pair === '11') morse += '-';
      }

      letters.push(MORSE_TABLE[morse]);
    }

    return letters.join('');
  };

  return expr.split(wordSeparator).map(decodeWord).join(' ');
};
