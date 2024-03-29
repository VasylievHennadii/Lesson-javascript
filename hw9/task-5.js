// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the          "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared,            regardless of the order.    
//         - Examples
//             - Valid arrays
//                 a = [121, 144, 19, 161, 19, 144, 19, 11]  
//                 b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//                 comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:                
//                 a = [121, 144, 19, 161, 19, 144, 19, 11] 
//                 b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
    
//             - Invalid arrays If we change the first number to something else, comp may not return true anymore:
//                 a = [121, 144, 19, 161, 19, 144, 19, 11]  
//                 b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
//                 comp(a,b) returns false because in b 132 is not the square of any number of a.
            
//                 a = [121, 144, 19, 161, 19, 144, 19, 11]  
//                 b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
//                 comp(a,b) returns false because in b 36100 is not the square of any number of a.
    
//             - Remarks:
//                 - a or b might be []. a or b might be null.
//                 - If a or b are null, the problem doesn't make sense so return false.
//                 - If a or b are empty the result is evident by itself.



// -----//------//----My solution to this kata is published on codewars.com----------//---------//-----//

function comp(array1, array2){
    if(array1 === null || array2 === null) {
        return false;
    }
    if (array1 === 0 || array2 === 0) {
        return false;
    }   
    if(array1.length !== array2.length ) {
        return false;
    }    
    var n = array1.length;
    for (var i = 0; i < n-1; i++) {        
        for (var j = 0; j < n-1-i; j++) {
            if (typeof array1[i] !== 'number' && typeof array2[i] !== 'number') {
                return false;
            }
            if (array1[j+1] < array1[j]) {
                var tmp = array1[j+1];
                array1[j+1] = array1[j];
                array1[j] = tmp;
            }
            if (array2[j+1] < array2[j]) {
                var tmp = array2[j+1];
                array2[j+1] = array2[j];
                array2[j] = tmp;
            }
        }        
    }   
    for ( var i = 0; i < n; i++) {
        if ( array2[i] !== array1[i]**2) {
            return false;
        }
    } 
    return true;  
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))

