

function removeDupes(str) {

    let uniqueChars = [];

    for (let i = 0; i < str.length; i++) { //O(n)

        if (uniqueChars.includes(str[i])) { //O(n)
            continue;
        } else {
            uniqueChars.push(str[i]);
        }
        
    }

    return uniqueChars.join('');
    
}


//Time Complexity: O(n^2)

//Space Complexity: O(n) : array length


console.log(
    removeDupes('abcd'),
    removeDupes('aabbccdd'),
    removeDupes('abababcdcdcd')
);