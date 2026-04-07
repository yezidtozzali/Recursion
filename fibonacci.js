const fibonacciIt = (n) => {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
};

console.log(fibonacciIt(15));

const fibonacciRec = (n) => {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  let prev = fibonacciRec(n - 1);

  prev.push(prev[prev.length - 1] + prev[prev.length - 2]);

  return prev;
};

console.log(fibonacciRec(15));
