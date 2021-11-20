function removeSpace(string) {
	return string.replace(/\s/g, "");
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

function rowParity(message) {
	let error = 0;
	let tempMessage = [];
	let parityBit;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 8; j++) {
        tempMessage.push(message[i][j])
    }
		parityBit = parityGenerator(tempMessage);
		if(parityBit!==parseInt(message[i][j]))
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
		if(parityBit!==parseInt(message[i][j]))
			error++;
		tempMessage = [];
	} 
	return error;
}

function twoDimensionalCheck(receivedWord) {
	receivedWord = removeSpace(receivedWord);
	let validityB = receivedWord.length === 45 && isBinary(receivedWord);

	let message = '';
	if(validityB){
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
