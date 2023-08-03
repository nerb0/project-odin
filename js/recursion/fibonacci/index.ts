function fibsRec(n: number, fib: number[] = []): number[] {
  if (n <= 0) return [];
  if (n <= 2) return [0, 1].slice(0, n);
  else {
    fib = fibsRec(n - 1, fib);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
  }
}

function fibs(n: number): number[] {
	if (n <= 0) return [];
	if (n == 1) return [0];
  let res = [0, 1];
  while (res.length < n) {
    const i = res.length - 1;
    res.push(res[i] + res[i - 1]);
  }
  return res;
}
