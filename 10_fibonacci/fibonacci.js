const fibonacci = function(input) {
    if(typeof input === 'string'){
        input = input.match(/\d+/);
    }

    if(input === null || input < 0){
        return "OOPS";
    }

    fib = [1,1];
    for (let i = 3; i <= input; i++) {
        fib.push(fib[i - 3] + fib[i - 2]);
    }
    return fib[input - 1];
};

// Do not edit below this line
module.exports = fibonacci;
