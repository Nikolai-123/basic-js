const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(sting, key) {
    if (!sting || !key) throw new Error;
  }    
  decrypt(sting, key) {
    if (!sting || !key) throw new Error;
  }
}

module.exports = VigenereCipheringMachine;
