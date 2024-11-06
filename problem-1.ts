{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    function sumArray(numbers: number[]): number {
        const reduceMethod = numbers.reduce((acc, num) => acc + num, 0)
        return reduceMethod;
    }






    //
}