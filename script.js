function fibonacci(num) {
// your code here
	let a = 0;
  let b = 1;

  for (let i = 2; i <= num; i++) {
    let fib = a + b;
    a = b;
    b = fib;
  }
  return b;
}

module.exports = fibonacci;
