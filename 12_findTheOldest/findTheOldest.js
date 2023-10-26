const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson)=>{
    const oldestAge=getAge(oldest.yearOfBirth, oldest.yearOfDeath);
   const currentAge=getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    return oldestAge < currentAge ? currentPerson : oldest;

   /*
    That line is a shorter way to say this: 
   if (oldestAge>currentAge) {
      return oldest;
    }else return currentPerson*/

  })
  

};


const getAge=function (birth, death) {
  if (!death) {
    death= new Date().getFullYear();
  } return death-birth
  
}


// Do not edit below this line
module.exports = findTheOldest;
