let arr1 = [19, 5, 42, 2, 77],
  arr2 = [10, 800, 3453000, 8010],
  arr3 = [12, 898, 899, 900];

function sumOfMin(arr) {
  // debugger;
  let a;
  let b;
  let min1;

  for (const num1 of arr) {
    a = num1;
    for (const num2 of arr) {
      b = num2;
      if (a > b) {
        min1 = b;
      }
    }
  }

  return min1 + b;
}

// function sumOfMin(arr) {
//   arr.sort((a, b) => {
//     if (a == b) return 0;
//     else if (a > b) return 1;
//     else if (a < b) return -1;
//   });

//   return arr[0] + arr[1]
// }

console.log(sumOfMin(arr1));
