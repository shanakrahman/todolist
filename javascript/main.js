/**
 *  @App
 *      please see note above in regards to
 *      why we are wrapping code in this App method
 */
var app = {
    
    addItemToList: function addItemToList(arr, item) {
        if (typeof item !== 'string') {
            return arr; 
        }
        else {
            arr.push(item); 
            return arr; 
        }
    },
    
    removeItemFromListEnd: function removeItemFromListEnd(arr) {
        arr.pop(); 
        return arr; 
    },
   
    addItemToListFront: function addItemToListFront(arr, item) {
        if (typeof item !== 'string') {
            return arr; 
        }
        else {
            arr.unshift(item); 
            return arr; 
        }
    },

    removeItemFromListStart: function removeItemFromListStart (arr) {
        arr.shift();
        return arr;
    },
    
    getItemFromList: function getItemFromList (arr, i) {
        if (typeof arr[i] === 'undefined') {
            return -1
        }   
        else {
        return arr[i];
        }
    },   
    removeItemFromPosition: function removeItemFromPosition (arr, i) {
        arr.splice(i,1);
        return arr; 
    },
    checkForDupes: function checkForDupes (arr) {
        var arrLength = arr.length;
        for (var i = 0; i < arrLength; i++) {
            checkVar = arr[i];
            for (var m = (i+1); m < arrLength; m++) {
                if (checkVar === arr[m]) {
                    app.removeItemFromPosition (arr, m);
                }
            }
        }
        return arr;
    }

//Argh didnt have enough time to finish this function! 
    addToTop: function addToTop (arr, item) {
        for (i=0; i<arr.length; i++ ){
            if (app.getItemFromList(arr, item === -1) {
                return arr; 
            }

        }
        

    }
        
};

var testArray = ["a","b","c"];
var test = app.addItemToList(testArray, 'd');
console.log ("This is addItemToList:", test); 

var testArray = ["a","b","c"];
var test = app.removeItemFromListEnd(testArray);
console.log ("This is removeItemFromListEnd:", test); 

var testArray = ["a","b","c"];
var test = app.addItemToListFront(testArray, 'd');
console.log ("This is addItemToListFront:", test); 

var testArray = ["a","b","c"];
var test = app.removeItemFromListStart(testArray);
console.log ("This is removeItemFromListStart:", test); 

var testArray = ["a","b","c"];
var test = app.getItemFromList(testArray, 1);
console.log ("This is getItemFromList:", test); 

var testArray = ["a","b","c"];
var test = app.removeItemFromPosition(testArray, 0);
console.log ("This is removeItemFromPosition:", test); 

var testArray = ["a","b","b",'a','d','s','d','a','s','e', 'e'];
var test = app.checkForDupes(testArray);
console.log ("This is checkForDupes:", test); 



/**
 *  @addItemToList
 *  arguments:
 *      arr: array
 *      item: new item to add
 *  return:
 *      arr
 */
// write your code for addItemToList here...


/**
 *  @addItemToListFront
 *  arguments:
 *      arr: array
 *      item: new item to add
 *  return:
 *      arr
 */
// write your code for addItemToListFront here...

// 


// /**
//  *  @removeItemFromListEnd
//  *  arguments:
//  *      arr: array
//  *  return:
//  *      arr
//  */
// // write your code for removeItemFromListEnd here...




// /**
//  *  @removeItemFromListStart
//  *  arguments:
//  *      arr: array
//  *  return:
//  *      arr
//  */
// // write your code for removeItemFromListStart here...

// 

// /**
//  *  @getItemFromList
//  *  arguments:
//  *      arr: array
//  *      i: number
//  *  return:
//  *      item at i-th position || -1
//  */
// // write your code for getItemFromList here...



/**
 *  @removeItemFromPosition
 *  arguments:
 *      arr: array
 *      i: number
 *  return:
 *      arr
 */
// write your code for removeItemFromPosition here...




/**
 *  @checkForDupes
 *  THIS IS AN EXTRA CREDIT PROBLEM
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for checkForDupes here...

/**
 *  @addToTop
 *  THIS IS AN EXTRA CREDIT PROBLEM
 *  arguments:
 *      arr: array
 *      item: string
 *  return:
 *      arr
 */
// write your code for addToTop here...







//******************************
// IGNORE from here on out
// magic to make the tests work
// Please ignore if you are simply solving the problem
    // var addItemToList = 
    //         (typeof addItemToList === "undefined")
    //         ? null
    //         : addItemToList
    //     , addItemToListFront = 
    //         (typeof addItemToListFront === "undefined")
    //         ? null
    //         : addItemToListFront
    //     , removeItemFromListEnd = 
    //         (typeof removeItemFromListEnd === "undefined")
    //         ? null
    //         : removeItemFromListEnd
    //     , removeItemFromListStart = 
    //         (typeof removeItemFromListStart === "undefined")
    //         ? null
    //         : removeItemFromListStart
    //     , getItemFromList = 
    //         (typeof getItemFromList === "undefined")
    //         ? null
    //         : getItemFromList
    //     , removeItemFromPosition = 
    //         (typeof removeItemFromPosition === "undefined")
    //         ? null
    //         : removeItemFromPosition
    //     , checkForDupes = 
    //         (typeof checkForDupes === "undefined")
    //         ? null
    //         : checkForDupes
    //     , addToTop = 
    //         (typeof addToTop === "undefined")
    //         ? null
    //         : addToTop;
    // return {
    //     addItemToList: addItemToList
    //     , addItemToListFront: addItemToListFront
    //     , removeItemFromListEnd: removeItemFromListEnd
    //     , removeItemFromListStart: removeItemFromListStart
    //     , getItemFromList: getItemFromList
    //     , removeItemFromPosition: removeItemFromPosition
    //     , checkForDupes: checkForDupes
    //     , addToTop: addToTop
    // }
// } // App
// App();
// function caller() {
//     return App;
// }
// caller();/* CURRENTLY IN: javascript/main.js */
