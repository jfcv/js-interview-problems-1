

function isUnique(str) {
    let chars = {};
    for (let i = 0; i < str.length; i++) { //O(n)
        if(chars[str[i]]) {
            return false;
        }
        chars[str[i]] = true;
    }
    return true;
}

//Time Complexity: O(n) : for loop

//Space Complexity: O(n) : object length

console.log(
    isUnique('juan'),
    isUnique('juana'),
    isUnique('ana'),
    isUnique('maria')
    );