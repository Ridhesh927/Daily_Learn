/*Step 1: Set Up the Polyfill Structure
We start by extending the Array.prototype with a new method called myFlat:
*/



Array.prototype.myFlat = function(depth = 1) {
    const tempArray = [];
​
    function flatten(arr, depth) {
        for (let element of arr) {
            if (Array.isArray(element) && depth > 0) {
                flatten(element, depth - 1);
            } else {
                tempArray.push(element);
            }
        }
    }
​
    flatten(this, depth);
    return tempArray;
};

/*Step 2: Implement the Flattening Logic

const arr = [1, 2, 3, 4, [5, 6], [[7, 8]]];
const result = arr.myFlat(2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]