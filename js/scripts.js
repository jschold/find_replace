var findReplace = function(userString, userWord, newWord) {
    var userStringUp = userString.toUpperCase();
    var userWordUp = userWord.toUpperCase();
    var userWordLow = userWord.toLowerCase();
    var userReplace = userString.replace(userWord, newWord);
    if (userStringUp.indexOf(userWordUp) >= 0 && newWord) {
        return userReplace;
    } else if (userStringUp.indexOf(userWordUp) >= 0) {
        return userWordLow;
    } else {
        return "That word is not found!"
    }
};

$(document).ready(function() {
  $("form#findReplace").submit(function(event) {

    var userString = $("input#userString").val();
    var userWord = $("input#userWord").val();
    var newWord = $("input#newWord").val();
    var result = findReplace(userString, userWord, newWord);

    $("#result").text(result);
    event.preventDefault();
  });
});
