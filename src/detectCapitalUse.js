/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    
    /* 
     * The approach is to use a simple regular expression and
     * use the test() to search for a match between 
     * word and regular expression.
     */
    
    return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
};

/*
var detectCapitalUse = function(word) {
    
    // Another solution.
    return word == word.match("[A-Z][a-z]+|[A-Z]+|[a-z]+");
};
*/