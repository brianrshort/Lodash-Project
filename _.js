const _ = {
    clamp: function(numOne, numTwo, numThree) {
        let newNum = Math.max(numOne, numTwo);
        return Math.min(newNum, numThree);
    },
    inRange: function(checkNum, startNum, endNum) {
        if (!endNum) {
            endNum = startNum;
            startNum = 0;
        }
        if (startNum > endNum) {
            let newStartVal = startNum;
            let newEndVal = endNum;
            startNum = newEndVal;
            endNum = newStartVal; 
        }
        if (checkNum < endNum && checkNum >= startNum) {
            return true;
        } else {
            return false; 
        }
    },
    
}




// Do not write or modify code below this line.
module.exports = _;