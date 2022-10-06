function mergeSort(arr){
  if(arr.length <= 1){
    return arr
  }

  let mid = Math.round(arr.length/2);
  let rightSet = mergeSort(arr.slice(0, mid));
  let leftSet = mergeSort(arr.slice(mid));

  return merge(rightSet, leftSet);

  function merge(rs, ls){
    let result = []
    while(rs.length > 0 && ls.length > 0){
      if( rs[0] < ls[0]){
        result.push(rs[0]); 
        rs.shift();
      } else {
        result.push(ls[0]); 
        ls.shift();
      }
    }
    return result.concat(ls, rs)
  }
}

 let a = [15, 8, 2, -10, -7,9, 25, 0, 10, -3, -1, 4, 12, -5], b = [];

 
 console.log(mergeSort(a)); // [-10, -7, -5, -3, -1, 0, 2, 4, 8, 9, 10, 12, 15, 25]
 console.log(mergeSort(b)); // []