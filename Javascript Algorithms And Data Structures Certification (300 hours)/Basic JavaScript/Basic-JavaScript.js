// -------------------------- AHAA -------------------------- //
//  title
// content
// -------------------------- AHAA -------------------------- //


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";

    result +=myNoun+" is "+myAdjective+" and it can "+myVerb+" "+myAdverb;
    // Your code above this line
    return result;
}

// Change the words here to test your function
wordBlanks("cat", "little", "hit", "slowly");



// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
// Store Multiple Values in one Variable using JavaScript Arrays


// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["ahmed",25];

// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Nest one Array within Another Array


// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [["x",'1'],['y',2]];



// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
// Access Array Data with Indexes

// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.
var myData = myArray[0];// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.
var myData = myArray[0];//50

// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Modify Array Data With Indexes



// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.

myArray[0]=45;
// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Access Multi-Dimensional Arrays With Indexes

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];



// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Manipulate Arrays With push()

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog",3]);

// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Manipulate Arrays With pop()

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray;

removedFromMyArray = myArray.pop();

// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Manipulate Arrays With shift()


// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray;

removedFromMyArray = myArray.shift();
// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//   Manipulate Arrays With unshift()
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul",35]);

// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//   Shopping List
var myList = [];

myList.push(["cat",5]);
myList.unshift(["dog",10]);
myList.push(["bird",3]);
myList.unshift(["mouse",1]);
myList.push(["elephant",4]);
// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Write Reusable JavaScript with Functions


// Example
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line

function reusableFunction()
{
    console.log("Hi World");
}

reusableFunction();


// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Passing Values to Functions with Arguments

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(a, b)
{
    console.log(a+b);
}

functionWithArgs(1,2);
// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Global Scope and Functions



// Declare your variable here
var myGlobal= 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}



// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Local Scope and Functions


function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar;
    console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Global vs. Local Scope in Functions



// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line

    var outerWear="sweater";

    // Only change code above this line
    return outerWear;
}

myOutfit();



// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Return a Value from a Function with Return


// Example
function minusSeven(num) {
    return num - 7;
}

// Only change code below this line

function timesFive(n)
{
    return n*5;
}


console.log(minusSeven(10));
console.log(timesFive(10));




// -------------------------- AHAA -------------------------- //



// -------------------------- AHAA -------------------------- //
//  Understanding Undefined Value returned from a Function


// Example
var sum = 0;
function addThree() {
    sum = sum + 3;
}

// Only change code below this line

function addFive()
{
    sum+=5;
}

// Only change code above this line
var returnedValue = addFive();




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Assignment with a Returned Value

// Example
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line

processed= processArg(7);






// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//   Stand in Line

function nextInLine(arr, item) {
    // Your code here
    var removedItem;
    arr.push(item);
    removedItem = arr.shift();
    return removedItem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Understanding Boolean Values



function welcomeToBooleans() {

// Only change code below this line.

    return true; // Change this line

// Only change code above this line.
}



// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Use Conditional Logic with If Statements



// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.

    if(wasThatTrue)
    {
        return  "Yes, that was true";
    }

    return  "No, that was false";
    // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);



// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Comparison with the Equality Operator

// Setup
function testEqual(val) {
    if (val==12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testEqual(10);





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Comparison with the Strict Equality Operator

// Setup
function testStrict(val) {
    if (val===7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);





// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Practice comparing different values

/*
typeof 3 // returns 'number'
typeof '3' // returns 'string'
*/

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");



// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Comparison with the Inequality Operator



// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testNotEqual(10);



// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Comparison with the Strict Inequality Operator


// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val!==17) {

        // Only Change Code Above this Line

        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testStrictNotEqual(10);




// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Comparison with the Greater Than Operator

function testGreaterThan(val) {
    if (val>100) {  // Change this line
        return "Over 100";
    }

    if (val>10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
testGreaterThan(10);





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Comparison with the Greater Than Or Equal To Operator


function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
        return "20 or Over";
    }

    if (val>=10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Comparison with the Less Than Operator

function testLessThan(val) {
    if (val<25) {  // Change this line
        return "Under 25";
    }

    if (val<55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
testLessThan(10);





// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Comparison with the Less Than Or Equal To Operator


function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val<=24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);





// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Comparisons with the Logical And Operator


function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val>=25) {
        return "Yes";

    }

    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(10);




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Comparisons with the Logical Or Operator


function testLogicalOr(val) {
    // Only change code below this line

    if (val>20||val<10) {
        return "Outside";
    }



    // Only change code above this line
    return "Inside";
}

// Change this value to test
testLogicalOr(15);




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Introducing Else Statements



function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

// Change this value to test
testElse(4);




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Introducing Else If Statements


function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else{
        return "Between 5 and 10";

    }

}

// Change this value to test
testElseIf(7);





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Logical Order in If Else Statements


function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

// Change this value to test
orderMyLogic(7);




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Chaining If Else Statements


function testSize(num) {
    // Only change code below this line
    if(num<5)
    {
        return "Tiny";
    }
    else if(num<10)
    {
        return "Small";
    }
    else if(num<15)
    {
        return "Medium";
    }
    else if(num<20)
    {
        return "Large";
    }
    else if(num>=20)
    {
        return "Huge";
    }
    return "Change Me";
    // Only change code above this line
}

// Change this value to test
testSize(7);




// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Golf Code


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if(strokes == 1)
    {
        return "Hole-in-one!";
    }
    else if(strokes <= par-2)
    {
        return "Eagle";
    }
    else if(strokes == par-1)
    {
        return "Birdie";
    }
    else if(strokes == par)
    {
        return "Par";
    }
    else if(strokes == par+1)
    {
        return "Bogey";
    }
    else if(strokes <= par+2	)
    {
        return "Double Bogey";
    }
    else if(strokes >= par+3)
    {
        return "Go Home!";
    }


    return "Change Me";
    // Only change code above this line
}

// Change these values to test
golfScore(5, 4);




// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Selecting from Many Options with Switch Statements



function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer= "alpha";break;

        case 2:
            answer= "beta";break;

        case 3:
            answer= "gamma";break;

        case 4:
            answer=  "delta";break;


    }


    // Only change code above this line
    return answer;
}

// Change this value to test
caseInSwitch(1);


// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
// Adding a Default Option in Switch Statements


function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case "a": answer= "apple"; break;
        case "b": answer= "bird"; break;
        case "c": answer= "cat"; break;
        default: answer= "stuff"; break;
    }

    // Only change code above this line
    return answer;
}

// Change this value to test
switchOfStuff(1);





// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Multiple Identical Options in Switch Statements


function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line

    switch(val)
    {
        case 1:
        case 2:
        case 3: answer="Low";break;
        case 4:
        case 5:
        case 6: answer="Mid";break;
        case 7:
        case 8:
        case 9: answer="High";break;

    }

    // Only change code above this line
    return answer;
}

// Change this value to test
sequentialSizes(1);





// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Replacing If Else Chains with Switch



function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case "bob": answer = "Marley"; break;
        case 42: answer = "The Answer"; break;
        case 1: answer = "There is no #1"; break;
        case 33: answer = "Missed me by this much!"; break;
        case 99: answer = "Missed me by this much!"; break;
        case 7: answer = "Ate Nine"; break;


    }


    // Only change code above this line
    return answer;
}

// Change this value to test
chainToSwitch(7);




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//   Returning Boolean Values from Functions


function isLess(a, b) {
    // Fix this code
    // if (a < b) {
    //   return true;
    // } else {
    //   return false;
    // }

    return a<b;
}

// Change these values to test
isLess(10, 15);




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Return Early Pattern for Functions



// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;

    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2, 2);



// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//   Counting Cards


var count = 0;

function cc(card) {
    // Only change code below this line

    switch (card)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;

    }

    if (count > 0) {
        return count+" Bet"

    }
    else {
        return count+" Hold";
    }

    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Build JavaScript Objects

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {

    "name": "jack",
    legs:4,
    "tails":1,
    "friends":["x","y"]


};





// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Accessing Object Properties with Dot Notation



// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line



// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//   Accessing Object Properties with Bracket Notation


// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line




// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Accessing Object Properties with Variables


var dogs = {
    Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"







var someObj = {
    propName: "John"
};
function propPrefix(str) {
    var s = "prop";
    return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"


// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber=16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//   Updating Object Properties


// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
myDog.name="Happy Coder";





// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Add New Properties to a JavaScript Object


// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
myDog["bark"]="woof";




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Delete Properties from a JavaScript Object


// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line.

delete myDog["tails"];




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Using Objects for Lookups


// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line


    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };

    result = lookup[val];
    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("charlie");




// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Testing Objects for Properties

var myObj = {
    top: "hat",
    bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false





// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if(myObj.hasOwnProperty(checkProp))
    {
        return myObj[checkProp];
    }
    return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Manipulating Complex Objects



var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Billy Joel2",
        "title": "Piano Man2",
        "release_year": 1974,
        "formats": [
            "CD",
            "8T",
        ],
    }
    // Add record here
];




// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Accessing Nested Objects



// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line




// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Accessing Nested Arrays




// Setup
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line




// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//   Record Collection


// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


    if (prop != "tracks" && value) {
        collection[id][prop] = value;
    }
    else if (prop == "tracks" &&
        !collection[id].hasOwnProperty(prop)) {
        collection[id][prop] = [value];
    }
    else if (prop == "tracks" && value) {
        collection[id][prop].push(value)
    }
    else if(!value)
    {
        delete collection[id][prop];
    }


    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Iterate with JavaScript While Loops

// Setup
var myArray = [];

// Only change code below this line.

var i=0;
while(i<=4)
{
    myArray.push(i);
    i++;
}



// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//   Iterate with JavaScript For Loops

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for(var i=1;i<6;i++)
{
    myArray.push(i);
}






// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Iterate Odd Numbers With a For Loop



// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}



// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Count Backwards With a For Loop


// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}





// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Iterate Through an Array with a For Loop


// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total=0;

for(var j=0;j<myArr.length;j++)
{
    total+=myArr[j];
}





// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Nesting For Loops



function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line

    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<arr[i].length;j++)
        {
            product*=arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);




// -------------------------- AHAA -------------------------- //


// -------------------------- AHAA -------------------------- //
//  Iterate with JavaScript Do...While Loops


// Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do{
    myArray.push(i);
    i++;
}while(i < 5);






// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Profile Lookup


//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i]["firstName"] == name) {

            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop]

            }
            else {
                return "No such property";
            }
        }
    }

    return "No such contact";
    // Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");




// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Generate Random Fractions with JavaScript



function randomFraction() {

    // Only change code below this line.

    return Math.random();// from 0 up to less 1

    // Only change code above this line.
}



// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Generate Random Whole Numbers with JavaScript

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    // Only change code below this line.

    return Math.floor(Math.random()*10);
}





// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Generate Random Whole Numbers within a Range




// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

    return Math.floor(Math.random()*(myMax-myMin+1))+myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);


// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Use the parseInt Function


function convertToInteger(str) {

    return parseInt(str);

}

convertToInteger("56");




// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Use the parseInt Function with a Radix



function convertToInteger(str) {
    return parseInt(str,2);//base 2 means binary
}

convertToInteger("10011");



// -------------------------- AHAA -------------------------- //
// -------------------------- AHAA -------------------------- //
//  Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
    return a == b ? true : false;
}

checkEqual(1, 2);





// -------------------------- AHAA -------------------------- //

// -------------------------- AHAA -------------------------- //
//  Use Multiple Conditional (Ternary) Operators


function checkSign(num) {

    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";

}

checkSign(10);




// -------------------------- AHAA -------------------------- //






