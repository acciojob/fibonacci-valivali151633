// function fibonacci(num) {
// // your code here
// 	if (num === 1) return 0;
// 	if (num === 2) return 1;
// 	return fibonacci(num-1)+fibonacci(num-2);
// }
// function fibonacci(num) {
//   if (num === 0) {
//     return 0;
//   } else if (num === 1) {
//     return 1;
//   } else {
//     let a = 0, b = 1;
//     for (let i = 2; i < num; i++) {
//       let temp = b;
//       b = a + b;
//       a = temp;
//     }
//     return b;
//   }
// }

function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return a;
  }
}


module.exports = fibonacci;
