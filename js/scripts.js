var findReplace = function(userString, userWord, newWord) {
    var userStringUp = userString.toUpperCase();
    var userWordUp = userWord.toUpperCase();
    var userWordLow = userWord.toLowerCase();
    // var newWordUp = newWord.toUpperCase();
    var userReplace = userString.replace(userWord, newWord);
    if (userStringUp.indexOf(userWordUp) >= 0 && newWord) {
        return userReplace;
    }

    else if (userStringUp.indexOf(userWordUp) >= 0) {
        return userWordLow;
    } else {
        return "That word is not found!"
    }
};
