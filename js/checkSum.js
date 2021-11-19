const addBinary = (str1, str2) => {
    let carry = 0;
    const res = [];
    let l1 = str1.length, l2 = str2.length;
    for (let i = l1 - 1, j = l2 - 1; 0 <= i || 0 <= j; --i, --j) {
       let a = 0 <= i ? Number(str1[i]) : 0,
       b = 0 <= j ? Number(str2[j]) : 0;
       res.push((a + b + carry) % 2);
       carry = 1 < a + b + carry;
    };
    if (carry){
       res.push(1);
    }
    return res.reverse().join('');
 };
 //https://www.tutorialspoint.com/adding-binary-strings-together-javascript
 
 function complement(binary) {
    let tempBinary = '';
    for (var i = 0; i < binary.length; i++) {
        tempBinary += binary[i] === '1' ? '0' : '1';
    }
    return tempBinary;
}
 
 function seperateData(message){
    let data = [];
    for (var i = 0; i < 5; i++) {
        data.push(message.substring(i*8, (i*8)+8));
    }
    return data;
 }

 function sum(data){
    let tempAns = 0;
    let currentAns = data[0];
    for (var i = 1; i < 5; i++) {
        tempAns = addBinary(currentAns, data[i]);
        if(tempAns.length === 9){
            currentAns = addBinary(tempAns.substring(1), '1')
        }
        else {
            currentAns = tempAns;
        }
    }

    return currentAns;
 }
 
 function checkSum(receivedWord){
    receivedWord = removeSpace(receivedWord);

    let validityB = receivedWord.length === 40 && isBinary(receivedWord)
                    ? true : false;
    
    let message;
    if(validityB){
        let data = seperateData(receivedWord);
        data = sum(data);
        data = complement(data);

        if(data === '00000000'){
            message = 'Accept Data';
        }
        else {
            message = 'Checksum error detected';
        }
    }
    else{
		message = 'Invalid Input.'
	}
    
    return message;
 }
 
 function checkSumButton() {
    document.getElementById("csOutput").innerHTML = checkSum(document.getElementById("csA").value);
}