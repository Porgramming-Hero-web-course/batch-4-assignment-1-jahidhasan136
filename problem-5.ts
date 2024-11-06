{
    //Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.


    function getProperty<T, Q extends keyof T>(obj: T, key: Q): T[Q] {
        return obj[key]
    }



    //
}