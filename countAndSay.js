
// get the next count and say string of parameter string 
function parse(mystring){
    var currChar = mystring[0];
    var currCharCount = 0;
    var index = 0;
    var result = '';
    
    while (index < mystring.length)
    {
        while (mystring[index] === currChar){
            currCharCount ++;
            index++;
        }
        result += currCharCount;
        result += currChar;
        currChar = mystring[index];
        currCharCount = 0;
    }
    
  return result;  
}

//print the first n-th rows of count and say sequance
function countAndSay(num){
    if (num > 0) {
        var result = '1';
        var i = 1;
        
        while (i<= num){
        console.log (result);
        result =  parse (result);
        i++;
        }
    }
}
        
countAndSay(10);