Q.  The significance of union and intersection types in Typescript.

=>  Union and Intersection types are important features in TypeScript 
    that help ensure type safety in you code.


    Union Type:-

    A union type is type formed from two or more types representing values that may be any of those types, denoted by the "|" symbol.

    Let's write a function that can operate on strings or numbers:

    function unionFormat(num: string | number) {
        console.log(num)
    }
    //succeess
    unionFormat('string')
    //success
    unionFormat(123)
    //Error
    unionFormat(true)


    But you can't use methods that are only available on string:

    function methodFormat(num: string | number){
        console.log(num.toUpperCase());
    }
    //It's show you an Error:- Property 'toUpperCase' does not exist on type 'string | number'.


    No need to worry though because you can solve this by using type guard if you want:

    function methodFormat(num: string | number) {
        if (typeof num === 'string') {
            console.log(num.toUpperCase())
        } else {
            console.log(num)
        }
    }


    Intersection Type:-

    A intersection type is type formed from two or more representing values that combine multiple types, denoted by the "&" symbol.

    interface User {
        name: string;
    }

    interface Admin {
        role: string;
    }

    const userAdmim: User & Admin = {
        name: 'Jahid Hasan',
        role: 'Admin'
    }

    An intersection type combines the structure of two or more types into a single type. Any variables declared with an intersection type must satisfy all of the constraint imposed by each individual type.

