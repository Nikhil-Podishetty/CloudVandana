const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number of elements: ', (n) => {
  const arr = [];
  rl.question('Enter the elements: ', (elements) => {
    arr.push(...elements.split(' ').map(Number));
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
    rl.close();
  });
});