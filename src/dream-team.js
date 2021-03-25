const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  while(Array.isArray(members)){
  let team = members.filter(function(member){
    return typeof member =='string';
  })
  team = team.join(',').toUpperCase();
  team = team.replace(/\s/g, '');
  team = team.split(',')
  team = team.sort();
  team = team.map(function(team) {
  return team[0];
  });
  team = team.join('');
  
  return team;
}
  return false;
};
