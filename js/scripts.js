// ---------------------- Specs -------------------------
// Spec 1 
// Describe: `vowBegin()`
// Test: "It will add 'way' to the end of words that begin with a vowel"
// Expect (vowBegin("octopus")).toEqual("octopusway");


// Spec 2
Describe: `consInRow()`
Test: "For words beginning with multiple consonants in a row, it will move all of them to the end of the word and add an 'ay'."
// Expect: (consInRow("streetlight")).toEqual("eetlightstray");

// Spec 3
Describe: `quMove()`
Test: "If the first consonants include,'qu', the program moves the 'u' along with the 'q'."
// Expect: (pigLatin("squeal")).toEqual("ealsquay");

// Spec 4
Describe: `yCons()`
Test: "For words beginning with 'y', the program treats 'y' as a consonant."
// Expect: (pigLatin("yum")).toEqual("umyay");


// ----------------------- Tests --------------------------
// Test 1

// Code to Test

$(document).ready(function () {
  $("#pigForm").submit(function (event) {
    function vowBegin(sentence) {
      if (/[aeiou]/.test(sentence)) {
        sentence += "way";
        return sentence;
      } else {
        return sentence;
      }
    }
    console.log(vowBegin("octopus"));
    event.preventDefault();
  });
});