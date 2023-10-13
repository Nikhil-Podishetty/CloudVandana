const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (str) => {
  console.log('String is: ' + str);
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = reverse(arr[i]);
  }
  for (const x of arr) {
    process.stdout.write(x + ' ');
  }
  rl.close();
});

function reverse(x) {
  let ans = '';
  for (let i = x.length - 1; i >= 0; i--) {
    ans = ans + x.charAt(i);
  }
  return ans;
}