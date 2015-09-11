var findReplace = function(userString, userWord) {
    var userStringUp = userString.toUpperCase();
    var userWordUp = userWord.toUpperCase();
    var userWordLow = userWord.toLowerCase();
    if (userStringUp.indexOf(userWordUp) >= 0) {
    return userWordLow;
}
};
