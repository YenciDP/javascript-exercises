const palindromes = function (string) {
   let palindrome=string.toLowerCase();
   let punctuationless = palindrome.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
   let finalString=punctuationless.replace(/\s{2,}/g,"");
   let spaceless=finalString.replaceAll(" ","");
  let array= spaceless.split("");
  array.reverse();

  let reversedString=array.join("");
  if (spaceless==reversedString) {
    return true
  }else return false
};

// Do not edit below this line
module.exports = palindromes;
