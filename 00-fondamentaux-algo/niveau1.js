// Exercice 1 : myPush()
function myPush(arr, element) {
  arr[arr.length] = element; 
  return arr.length;         
}

// Exercice 2 : myPop()
function myPop(arr) {
  if (arr.length === 0){
    return undefined;
  }

  const lastIndex = arr.length - 1;
  const removed = arr[lastIndex];
  arr.length = lastIndex; 
  return removed;
}

// Exercice 3 : myIndexOf()
function myIndexOf(arr, element) {   
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) 
        return i; 
  }
  return -1;
}

// Exercice 4 : myIncludes()
function myIncludes(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        return true;
    }
  }
  return false;
}

// Exercice 5 : myReverse()
function myReverse(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const j = arr.length - 1 - i;
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}