const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  while(Array.isArray(members)){
  let team = members.filter(function(member){
    return typeof member =='string';
  })
  team = team.map(function(team) {
    team = team.join(',').toUpperCase().replace(/\s/g, '');
  return team;
  });

  
  team = team.split(',')
  team = team.sort();
  team = team.map(function(team) {
    team = team[0];
    
  return team;
  });
  team = team.join('');
  
  return team;
}
  return false;
};
