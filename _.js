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
    invert: function(object) {
        var invertedObject = {};
        var keysArray = Object.keys(object);
        var valuesArray = Object.values(object);
        for (var i=0; i < keysArray.length; i++) {
            invertedObject[valuesArray[i]] = keysArray[i];
        }
        return invertedObject;
    },
    findKey: function(object, callback) {
        var arr = Object.values(object);
        var arrTwo = Object.keys(object);
        for (var i=0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arrTwo[i];
            }
        }
    },
    drop: function(arr, num) {
        if (!num) {
            num = 1;
        }
        arr.splice(0, num);
        return arr;
    },
    dropWhile: function(arr, callback) {
        for (var i=0; i<arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                arr.shift();
            }
        }
        return arr; 
    },
    
}




// Do not write or modify code below this line.
module.exports = _;