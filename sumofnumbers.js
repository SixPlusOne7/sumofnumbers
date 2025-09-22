"use strict";
// write 4 functions that return the sum of the numbers in a given list
// using a for loop, a whilte loop, recursion, and array functional programming
// sumFor
function sumFor(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
// sumWhile
function sumWhile(numbers) {
    let total = 0;
    let i = 0;
    while (i < numbers.length) {
        total += numbers[i];
        i++;
    }
    return total;
}
// sumRecursion
function sumRecursion(nums) {
    if (nums.length === 0)
        return 0;
    return nums[0] + sumRecursion(nums.slice(1));
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
