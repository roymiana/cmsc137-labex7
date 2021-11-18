function removeSpace(string) {
	return string.replace(/\s/g, "");
}

function isBinary(word) {
	for (var i of word) {
		if (i !== '0' && i !== '1') return false;
	}
	return true;
}

function convertToArray(word) {
	word = removeSpace(word);

	let message = new Array(5);

	for (var i = 0; i < 5; i++) {
    message[i] = new Array(9);
	}

	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 9; j++) {
        message[i][j] = word[((i*9)+(j+1))-1];
    }
	} 
	return message;
}

function parityGenerator(word) {
	var oneSum = 0;
	for (var i of word) {
		if(i === '1')
			oneSum++;
	}
	return oneSum%2 === 0 ? '0' : '1';
}

function rowParity(message) {
	let error = 0;
	let tempMessage = [];
	let parityBit;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 8; j++) {
        tempMessage.push(message[i][j])
    }
		parityBit = parityGenerator(tempMessage);
		if(parityBit!==message[i][j])
			error++;
		tempMessage = [];
	} 
	return error;
}

function columnParity(message){
	let error = 0;
	let tempMessage = [];
	let parityBit;
	for (var j = 0; j < 9; j++) {
		for (var i = 0; i < 4; i++) {
				tempMessage.push(message[i][j]);
    }
		parityBit = parityGenerator(tempMessage);
		if(parityBit!==message[i][j])
			error++;
		tempMessage = [];
	} 
	return error;
}

function twoDimensionalCheck(sentWord, receivedWord) {
	// sentWord = removeSpace(sentWord);
	receivedWord = removeSpace(receivedWord);

	// let validityA = sentWord.length === 32 && isBinary(sentWord)
	// 							? true : false;
    let validityA = true;
	let validityB = receivedWord.length === 45 && isBinary(receivedWord)
								? true : false;

	let message = '';
	if(validityA && validityB){
		let data = convertToArray(receivedWord);
		let cParity = columnParity(data);
		let rParity = rowParity(data);

		let error = cParity >= rParity ? cParity : rParity;
		message = 'Error Count: ' + error;
	}
    else{
		message = 'Invalid Input.'
	}
	
	return message;
}

function twoDimensionalButton() {
    document.getElementById("tdOutput").innerHTML = twoDimensionalCheck('document.getElementById("tdA").value', document.getElementById("tdB").value);
}