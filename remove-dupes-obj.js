

function removeDupes(str) {

    let chars = {};
    let uniqueChars = [];

    for (let i = 0; i < str.length; i++) { //O(n)

        if (chars[str[i]]) { //O(1)
            continue;
        } else {
            uniqueChars.push(str[i]);
            chars[str[i]] = true;
        }
        
    }

    return uniqueChars.join('');
    
}


//Time Complexity: O(n)

//Space Complexity: O(n) : array length


console.log(
    removeDupes('abcd'),
    removeDupes('aabbccdd'),
    removeDupes('abababcdcdcd')
);