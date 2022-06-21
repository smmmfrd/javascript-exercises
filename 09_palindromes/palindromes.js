const palindromes = function (a) {
    a = (a.match(/[a-zA-Z]/g).join('')).toLowerCase();
    let b = a.split("").reverse().join("");
    return a === b;
};

// Do not edit below this line
module.exports = palindromes;
