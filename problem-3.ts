{
    // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    function countWordOccurrences(sentence: string, word: string): number {
        let count = 0;
        const sentenceSplit = sentence.split(" ");
        sentenceSplit.map(elem => {
            if (elem.toLowerCase().includes(word.toLowerCase())) {
                count += 1
            }
        })
        return count;
    }


    // 
}