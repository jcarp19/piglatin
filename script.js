"use strict";

const translate = (str) => {
    
    str = str.toLowerCase();
    
    const vowels = ["a", "e", "i", "o", "u"];

    if (vowels.includes(str[0])) { // if word starts with a vowel
        return str + "way";
    } else { // if word starts with a consonant
        // make a variable to hold the consonants
        let notVowels = "";
        // loop through str adding beginning consonant to notVowels
        for (let i = 0; i < str.length; i++) {
            // is consonant
            if (!vowels.includes(str[i])) { 
                notVowels += str[i];
            } else { // is a vowel
                return str.slice(i) + notVowels + "ay";
            };
        };
    };
};

module.exports = translate;