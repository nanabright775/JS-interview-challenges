/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    const newStr = [... str].map(
        l => {
            //if the number from the operation math random will be between 0 and 1 so if 
            //it 0.5 we uppercase the letter if not we lowecase the letter then afte join them 
            //together
            return Math.random() < 0.5 ? l.toUpperCase() : l.toLowerCase()
        }
    )
    console.log(Math.random() < 0.5)
    return newStr.join('');
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));