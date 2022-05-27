/**
 * 
 * @param {*} word Target word that we are searching anagrams for
 * @param {*} listOfWords List of words that we compare against
 */
exports.anagramsFor = function(word, listOfWords) {
    /*

    * We can be given an array with words that aren't the same length as the target word

    * We need to return a new list/array with all qualifying words within the list/array to the target word

    */

    // For our first catch case we split the target word to an array
    const wordToArray = word.split('').sort();
    // Now that it's an array we can get the length of the array
    const lengthOfTargetArray = wordToArray.length;
    //Let's prepare a new array to return all the anagram words within the listOfWords
    let answerArray = [];

    // Now that we established our initial values, let's perform some logic

    // For word in list of words
    for (listedWord in listOfWords) {
        // At current indexed word in array, turn the string to an array
        const splitWord = listOfWords[listedWord].split('').sort();
        // Like before we make another variable for the length for comparison
        const lengthOfCurrentWord = splitWord.length;
        // Now that we have the lengths we can perform our first catch case to prevent additional logic from performing
        if (lengthOfTargetArray != lengthOfCurrentWord) {
            // We aren't the same length as the target word, so skip
            continue;
        }
        // If we are the same length let's see if have the same letters
        for (letter in splitWord) {
            if (splitWord[letter] == wordToArray[listedWord]) {
                //continue after adding the 
                answerArray.push(listOfWords[listedWord]);
            }
        }
    }
    // Return our answer array
    return answerArray
};