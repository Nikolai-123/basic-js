const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const con = 0.693;
let result=0;

module.exports = function dateSample( sampleActivity ) {
 
  while(sampleActivity>0 && sampleActivity<=15 && typeof sampleActivity=='string') {
    const first = Math.log(MODERN_ACTIVITY/sampleActivity);
    const second = con/HALF_LIFE_PERIOD;
    result = first/second;
    return Math.ceil(result);
     };
  return false;
};
