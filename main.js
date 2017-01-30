"use strict";

console.log("hey there tree maker!");

//main variable for tree
var pineTree = {
    height: 0,
    character: 0
};


//get user imput from DOM for tree height, character, & submit
var height = document.getElementById('height');
var character = document.getElementById('character');
var grow = document.getElementById('grow');

//Add event listeners to DOM elements
grow.addEventListener('click', checkInput);
height.addEventListener('keypress', pressed);
character.addEventListener('keypress', pressed);

//function to run the tree maker when enter is pressed in either input field
function pressed(event) {
    console.log(event);
    if (event.keyCode === 13) {
        console.log("tree", pineTree);
        treeMaker(pineTree);
    }
};


// function to run the tree maker when submit is pressed. Also checks to make sure user has filled
// out input fields
function checkInput() {
    if (height.value === "") {
        alert('Please enter a number value');
    } else if (character.value === "") {
        alert('Please enter a character in order to make your tree');
    } else {
        console.log(pineTree);
        treeMaker(pineTree);
    }
};

// //checking to see if listeners are well...listening
// console.log("height", pineTree.height);
// console.log("character", pineTree.character);

//main function to create tree using spaces and user input values
function treeMaker(pineTree){
    console.log("", pineTree);
    pineTree.height = height.value;
    pineTree.character = character.value;
    console.log("", pineTree);
    var spaceCalc = pineTree.height - 1;
    var charCalc = 1;

    for (var i=0; i< pineTree.height; i++ ) {


    var spaces = " ".repeat(spaceCalc);
    var chars = pineTree.character.repeat(charCalc);
    var treeGrow = spaces + chars;
    console.log(treeGrow);

    spaceCalc -= 1;
    charCalc += 2;
    };

};
