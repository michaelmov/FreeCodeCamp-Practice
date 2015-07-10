function palindrome(str) {
  var rawString = str.replace(/[\s,.";:'!?+-]/g, '').toLowerCase();
  var rawStringLength = rawString.length;
  
  
  for(var i = 0; i <= rawString.length; i++) {
    
    if(rawString[i] !== rawString[rawStringLength - 1 - i]){
      return false;
    }
  }

  return true;
}



palindrome("A man, a plan, a canal. Panama");