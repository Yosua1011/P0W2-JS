/**var a = 'hello world!'

function reverser(inputSentence){
    var words = inputSentence.split(" "); // Split the sentence into words
    var output = new Array(); // Initiate the output
    words.forEach(function(word) { // For each word
        output.push(word.split("").reverse().join("")); // Reverse the word and add it to the output
    });
    return output.join(" "); // Join output to string and return it
}

console.log(reverser(a));**/

/**
var a = 'hello world!'

function balikString(inputSentence){
	return inputSentence.split("").reverse().join("")
	.split(" ").reverse().join(" ").split
}

console.log(balikString(a));
**/

var a = 'hello world!'

function balikString(inputSentence){
	return inputSentence.split("").reverse().join("")
}

console.log(balikString(a));