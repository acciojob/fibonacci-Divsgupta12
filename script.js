function fibonacci(num) {
// your code here
	let a = 0;
  let b = 1;
  let fib = 1;
  for (let i = 2; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
}

module.exports = fibonacci;
