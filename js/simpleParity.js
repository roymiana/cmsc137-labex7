function parityBit(word) {
	return word[word.length - 1];
}

//Simple Parity Check Functions
function syndromeChecker(receivedWord) {
	let rParity = parseInt(parityBit(receivedWord));
	let rCount = parseInt(parityGenerator(receivedWord.substring(0, receivedWord.length-1)));
	
	return rParity===rCount;
}

function simpleParityCheck(sentWord, receivedWord) {
    let validityA = sentWord.length === 8 && isBinary(sentWord);
    let validityB = receivedWord.length === 9 && isBinary(receivedWord);
	let syndrome = syndromeChecker(receivedWord);
	let status = syndrome ? receivedWord.substring(0, receivedWord.length-1): 'Discarded';

	let sentCodeword = sentWord + parityGenerator(sentWord);
    let message = '';
    if(validityA && validityB)
        message = '@Sender\nCodeword: '+sentCodeword +'\n\n'
                + '@Receiver\nData word: '+ status;
    else
        message = 'Invalid Input.'
	
	return message;
}
