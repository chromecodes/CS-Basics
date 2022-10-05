function fibRec(n, arr=[0,1]){
    if(num <= 0) return 'Must be greater than 0';
    if (n == 1)return [0];
    if (arr.length == n){
      return arr
    }
     arr.push(arr[arr.length-2] + arr[arr.length-1])
   return fibRec(n, arr)
  }

  console.log(fibRec(8));
  console.log(fibRec(13));
  console.log(fibRec(-2));
  console.log(fibRec(1));