function parityGenerator(word) {
	var oneSum = 0;
	for (var i of word) {
		if(i === '1')
			oneSum++;
	}
	return oneSum%2 === 0 ? '0' : '1';
}

function parityBit(word) {
	return word[word.length - 1];
}

function isBinary(word) {
	for (var i of word) {
		if (i !== '0' && i !== '1') return false;
	}

	return true;
}

//Simple Parity Check Functions
function syndromeChecker(receivedWord) {
	let rParity = parseInt(parityBit(receivedWord));
	let rCount = parseInt(parityGenerator(receivedWord.substring(0, receivedWord.length-2)));
	
	return rParity===rCount ? true : false;
}

function simpleParityCheck(sentWord, receivedWord) {
    let validityA = sentWord.length === 8 && isBinary(sentWord)
                    ? true : false;
    let validityB = receivedWord.length === 9 && isBinary(receivedWord)
                    ? true : false;
	let syndrome = syndromeChecker(receivedWord);
	let status = syndrome ? receivedWord: 'Discarded';

	let sentCodeword = sentWord + parityGenerator(sentWord);
    let message = '';
    if(validityA && validityB)
        message = '@Sender\nCodeword: '+sentCodeword +'\n\n'
                + '@Receiver\nData word: '+ status;
    else
        message = 'Invalid Input.'
	
	return message;
}


function simpleParityButton() {
    document.getElementById("spOutput").innerHTML = simpleParityCheck(document.getElementById("spA").value, document.getElementById("spB").value);
}