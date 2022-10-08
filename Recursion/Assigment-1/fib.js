  function fib(n){
    arr = [0, 1]
    if(num <= 0) return 'Must be greater than 0';
    if (n == 1)return [0];
    if (n == 2)return arr;
    for (i=2; i<n; i++){
      arr.push(arr[arr.length-2]+arr[arr.length-1])
    }
    return arr
  }

  console.log(fib(8));
  console.log(fib(13));
  console.log(fib(-2));
  console.log(fib(1));


