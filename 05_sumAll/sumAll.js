const sumAll = function(a,b) {
    // Input validation
    if((isNaN(a) || a < 0 || typeof a === 'string') ||
    (isNaN(b) || b < 0 || typeof b === 'string')){ 
        return 'ERROR';
    }


    let sum = 0;
    let smaller = (a < b) ? a : b;
    let bigger = (a > b) ? a : b;

    for(let i = smaller; i <= bigger; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
