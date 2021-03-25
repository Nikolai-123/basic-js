const CustomError = require("../extensions/custom-error");

const chainMaker = {
   str : [],

  getLength() {
    return this.str.length;
    
  },
  addLink(value) {
    this.str.push('( '+value+' )');
     return this;
  },
  removeLink(position) {
    if(this.str[position]!==undefined && typeof position ==='number'){
      this.str.splice(position-1,1)
    }else{
    this.str = [];
    throw new Error();
  }
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let a = this.str;
    this.str = [];
    return a.join('~~');
  }
};

module.exports = chainMaker;
