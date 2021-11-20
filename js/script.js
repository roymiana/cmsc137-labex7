function parityGenerator(word) {
	var oneSum = 0;
	for (var i of word) {
		if(i === '1')
			oneSum++;
	}
	return oneSum%2 === 0 ? '0' : '1';
}

function isBinary(word) {
	for (var i of word) {
		if (i !== '0' && i !== '1') return false;
	}

	return true;
}

function simpleParityButton() {
    document.getElementById("spOutput").innerHTML = simpleParityCheck(document.getElementById("spA").value, document.getElementById("spB").value);
}

function twoDimensionalButton() {
    document.getElementById("tdOutput").innerHTML = twoDimensionalCheck('document.getElementById("tdA").value', document.getElementById("tdB").value);
}

function checkSumButton() {
    document.getElementById("csOutput").innerHTML = checkSum(document.getElementById("csA").value);
}

function crcButton() {
    document.getElementById("crcOutput").innerHTML = crc(document.getElementById("crcA").value);
}