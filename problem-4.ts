{
    //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: string;
        radius: number
    }

    type Rectangle = {
        shape: string;
        width: number;
        height: number
    }

    type CircleRectangle = Circle | Rectangle

    function calculateShapeArea(method: CircleRectangle) {
        if ('radius' in method) {
            return (Math.PI * method.radius * method.radius).toFixed(2)
        } else if ('width' in method) {
            return method.width * method.height
        }
    }





    //
}