const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
 let {
  repeatTimes,separator,addition,additionRepeatTimes,additionSeparator
 } = options;

 separator = separator || '+';
 additionSeparator = additionSeparator || '|';
 addition = addition || null;
 additionRepeatTimes = additionRepeatTimes;
 repeatTimes = repeatTimes;

 const temp = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
 const result = new Array(repeatTimes).fill(str + temp).join(separator);
 
 return result;

};
  