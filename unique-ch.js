

function isUnique(str) {
    for (let i = 0; i < str.length; i++) { //O(n)
        if(i !== str.lastIndexOf(str[i])) { //O(n)
            console.log(i, str.lastIndexOf(str[i]));
            return false;
        }
    }
    return true;
}

//Time Complexity: O(n^2) -> nested loops
//Space Complexity: O(1) -> constant space : using just 1 variable -> i

console.log(
    isUnique('juan'),
    isUnique('juana'),
    isUnique('ana'),
    isUnique('maria')
    );