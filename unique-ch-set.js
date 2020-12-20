

function isUnique(str) {
    return new Set(str).size === str.length;
}


//Time Complexity: O(n) : for loop

//Space Complexity: O(n) : object length

console.log(
    isUnique('juan'),
    isUnique('juana'),
    isUnique('ana'),
    isUnique('maria')
    );