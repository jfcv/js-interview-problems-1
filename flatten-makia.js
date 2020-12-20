

function flatten(nestedArray) {
    const newArray = [];
    for (let i = 0; i < nestedArray.length; i++) { //O(n)
        if(Array.isArray(nestedArray[i])) {
            let flatItem = flatten(nestedArray[i]);
            for (let j = 0; j < flatItem.length; j++) { //O(n)
                newArray.push(flatItem[j]);                
            }
        } else {
            newArray.push(nestedArray[i]);
        }
    }
    return newArray;
}


//Time Complexity: seems like O(n^2) BUT it's O(n) because each item is processed once

//Space Complexity: O(n) -> linear space : newArray


console.log(
    flatten([[1,2],3,[[4,5],2]])
);