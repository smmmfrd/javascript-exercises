const findTheOldest = function(people) {
    // Returns the object with the highest age.
    return people.reduce((currentOldest, current) => {
        const prevAge = GetAge(currentOldest.yearOfBirth, currentOldest.yearOfDeath);
        const currentAge = GetAge(current.yearOfBirth, current.yearOfDeath);
        return currentAge > prevAge ? current : currentOldest;
    });

};

function GetAge(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
