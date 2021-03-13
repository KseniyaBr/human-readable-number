module.exports = function toReadable (number) {
 
    var string = number.toString(),
        units, tens, bigNums, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    if (parseInt(string) === 0) {
        return 'zero';
    }

    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    bigNums = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }
  
    chunksLen = chunks.length;
    if (chunksLen > bigNums.length) {
        return '';
    }

    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            ints = chunks[i].split('').reverse().map(parseFloat);

            if (ints[1] === 1) {
                ints[0] += 10;
            }

            if ((word = bigNums[i])) {
                
            }

            if ((word = units[ints[0]])) {
                words.push(word);
              
            }

            if ((word = tens[ints[1]])) {
                words.push(word);
              
            }

            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }
        }

    }

    return words.reverse().join(' ');
  }
