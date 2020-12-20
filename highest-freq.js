

function highestFrequency(str) {

    let frequencies = {};
    let maxFrequency = 0;
    let mostFrequentStr = '';


    for (let i = 0; i < str.length; i++) {

        if(frequencies[str[i]] === undefined) { //O(n)
            frequencies[str[i]] = 1;
        } else {
            frequencies[str[i]]++;
        }

        if(frequencies[str[i]] > maxFrequency) { //O(n)
            maxFrequency = frequencies[str[i]];
            mostFrequentStr = str[i]; 
        }
    }

    return mostFrequentStr;
}

//Time Complexity: O(n)

//Space Complexity: O(n) : array length

console.log(
    highestFrequency(['a','b','c','c','d','d','d','e']),
    highestFrequency(['abc','ghi','abc','ghi','abc']),
    highestFrequency(['zdg','dfg','zdg'])
);