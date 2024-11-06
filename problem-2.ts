{
    //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


    function removeDuplicates(numbers: number[]) {
        const newArray = numbers.filter((val, index, val2) => val2.indexOf(val) === index)
        return newArray
    }






    //
}