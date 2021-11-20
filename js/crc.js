function orBinary(str1, str2) {
    let ans = '';
    for(var i = 1; i < 4; i++){
        if(str1[i]===str2[i])
            ans += '0';
        else
            ans += '1';
    }
    return ans;
}

function crcDivision(dividend) {
    let quotient = '';
    let divisor;
    let remainder = dividend.substring(0, 3);

    for(var i = 3; i < 7; i++){
        remainder += dividend[i];
        quotient += dividend[i-3];

        divisor = remainder[0] === '1' ? '1011' : '0000';
        remainder = orBinary(remainder, divisor);
    }

    return remainder;
}

function crc(data){
    console.log(data.length)
    let validity = data.length === 7 && isBinary(data)
                    ? true : false;
    
    let message;
    if(validity){
        let quotient = crcDivision(data);

        if(quotient === '000') {
            message = 'Accept Data';
        }
        else {
            message = 'CRC error detected'
        }
    }
    else {
        message = 'Invalid Input.'
    }

    return message;
}