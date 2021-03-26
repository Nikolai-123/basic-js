const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth( arr ) {
    let count = 1;
    if (Array.isArray(arr)){
      if(arr[0]===undefined){
      return 1;
    }else{
     count = count + (Math.max(...arr.map(
       elem => this.calculateDepth(elem))));
     return count;
    }
}else{
  return 0;
}
}
}
