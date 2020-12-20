//eliminate duplicates & order array

let arr = [8,1,2,1,2,3,4,5,7,8];

const set = new Set(arr.sort()); //O(n * log(n))

console.log(set);

//Time Complexity: O(n * log(n)) : sort()

//Space Complexity: O(n) : set length