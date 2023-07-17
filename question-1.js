// 1. Create a custom sorting function which sorts an array of numbers in ascending order.

function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const myArray = [5, 2, 4, 1, 3];
sort(myArray);
console.log(myArray);
