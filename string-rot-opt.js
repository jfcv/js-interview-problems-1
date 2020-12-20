

function stringRotation(str1,str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2);
}


//Time Complexity: O(n)

//Space Complexity: O(n) : string length


console.log(
    stringRotation('rotation','tationro'),
    stringRotation('Javascript','scriptJava'),
    stringRotation('hello','there'),
    stringRotation('Javascript','Java')
);