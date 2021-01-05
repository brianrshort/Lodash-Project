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
    words: function(string) {
        let arr = string.split(' ');
        return arr;
    },
    pad: function(string, length) {
        if (string.length > length) {
            return string;
        } else {
            var dist = length - string.length; 
            var front = Math.floor(dist / 2);
            var back = Math.ceil(dist / 2);
            var pad = " ";
            var output = pad.repeat(front) + string + pad.repeat(back);
            return output;
        }
    },
    has: function(object, property) {
        return object.hasOwnProperty(property);
    },
    
}




// Do not write or modify code below this line.
module.exports = _;