

function stringRotation(str1,str2) {

    if(str1.length !== str2.length) {
        return false;
    }

    let rotations = [];    
    for (let i = 0; i < str1.length; i++) { //O(n)
        
        rotations[i] =  str1.slice(1-str1.length) + str1[0]; //O(n)
        str1 = rotations[i];

        if(str2 === rotations[i]) {
            return true;
        }
    }

    return false;

}


//Time Complexity: O(n^2)

//Space Complexity: O(n) : string length


console.log(
    stringRotation('rotation','tationro'),
    stringRotation('Javascript','scriptJava'),
    stringRotation('hello','there'),
    stringRotation('Javascript','Java')
);