

function removeDupes(str) {

    const mySetArr = new Set(str); //O(n)
    return Array.from(mySetArr).join('');
    
}


//Time Complexity: O(n)

//Space Complexity: O(n) : array length


console.log(
    removeDupes('abcd'),
    removeDupes('aabbccdd'),
    removeDupes('abababcdcdcd')
);
