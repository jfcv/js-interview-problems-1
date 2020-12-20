

function isUnique(str) {
    let chars = str.split('').sort(); //O(n * log(n))
    for (let i = 1; i < chars.length; i++) { //O(n)
        if(chars[i] === chars[i - 1]) {
            return false;
        }
    }
    return true;
}

//Time Complexity: O(n) + O(n * log(n)) : O( n + (n * log(n)) ) 
// O(n * (1 + log(n))) : O(n * log(n))

//Space Complexity: O(n) -> linear space : chars

console.log(
    isUnique('juan'),
    isUnique('juana'),
    isUnique('ana'),
    isUnique('maria')
    );