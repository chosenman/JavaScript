// Implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true

    var isMatch = function(s, p) {
        // var re = new RegExp("a|b", "g");
        // same as
        // var re = /a|b/g;
        let result;

        // creating regex from the string
        let re = new RegExp( "^"+p+"$" , "" );

        //console.log("s.match(re) ", s.match(re) );

        
        if( s.match(re) === null ){
            result = false;
        } else if( s.match(re).length != 0 ){
            result = true;
        } 

        return result
    };
    
// console.log( isMatch("aa","a") ); //→ false
// console.log( isMatch("aa","aa") ); //→ true
// console.log( isMatch("aaa","aa") ); //→ false
// console.log( isMatch("aa", "a*") ); //→ true
// console.log( isMatch("aa", ".*") ); //→ true
// console.log( isMatch("ab", ".*") ); //→ true
// console.log( isMatch("aab", "c*a*b") ); //→ true
