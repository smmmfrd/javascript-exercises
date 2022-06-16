const repeatString = function(string, num) {
    if(num < 0) return 'ERROR';

    let message = '';
    for (let i = 0; i < num; i++) {
        message += string;
        
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
