const removeFromArray = function() {
    array = arguments[0];

    //Values are everything in the arguments array after 0.
    for (let i = 1; i < arguments.length; i++) {
        const remove = array.indexOf(arguments[i]);
        if(remove > -1){
            array.splice(remove, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
