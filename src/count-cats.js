const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.flat();
  let num = arr.filter(function(value,i){
    return value==='^^';  
  })
  return (num.length);
};
