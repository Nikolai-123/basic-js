const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
let newArr = [];

  
  if(!Array.isArray(arr)){
    throw new Error('Error');
  }
  if (arr.length === 0 || arr === 'Infinity') {
    return [];
  }
    for(let i=0; i<arr.length; i++){
      if(arr[i]==='--discard-next' && i !== arr.length-1 ){
        i++;
      }
      else if(arr[i]==='--discard-prev' && arr[i - 2] !== '--discard-next'  && arr.length !== 0 ){
        newArr.pop();
      }else if(arr[i]==='--double-next' && i < arr.length - 1 ){
        
        newArr.push(arr[i+1]);
      
      }else if(arr[i]==='--double-prev' && arr[i-2] !== '--discard-next' && i !== 0 ){
        newArr.push(arr[i-1]);
      
      }else if(arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev'){ continue;
      }else{
        newArr.push(arr[i]);
      }  
  }
  return newArr;

  }



