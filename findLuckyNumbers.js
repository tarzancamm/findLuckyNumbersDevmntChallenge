// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)
// You can trust that this function will never be called with n < 0 or n > 10.
// Write your code below this line.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let returnRandom = (num) => {
    let emptyArr = []
    for (let i = 1; i <= num; i++) {
        let test = arr.splice([Math.floor(Math.random() * arr.length)], 1)
        emptyArr.push(test[0])
    }
 return emptyArr;
}

let nNumbers = returnRandom(5);
console.log(nNumbers)

