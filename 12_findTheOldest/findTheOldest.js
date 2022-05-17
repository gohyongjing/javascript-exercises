function getAge(person) {
    return ('yearOfDeath' in person ? 
            person['yearOfDeath'] : 
            new Date().getFullYear()) - person['yearOfBirth'];
}

function isOlder(person1, person2) {
    return getAge(person1) > getAge(person2) ? person1 : person2;
}

const findTheOldest = function(arr) {
    return arr.reduce(isOlder);
};

// Do not edit below this line
module.exports = findTheOldest;
