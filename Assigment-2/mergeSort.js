function mergeSort(arr){

  let mid = Math.round(arr.length/2);
  rightSet = arr.slice(0, mid)
  leftSet = arr.slice(mid+1)

  if(arr.length <= 1){
    return arr
  }
  if(arr.length == 2){
    if(arr[0] > arr[1]){
      tempArr = []
      tempArr.push(arr[1])
      tempArr.push(arr[0])
      return tempArr
    }
  }

  
}