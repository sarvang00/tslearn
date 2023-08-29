function detectTypes(val: number | string) {
    if (typeof val == "string") {
        return val.toLowerCase()
    }
    return val + 3
}

// function provideId(id: string | null) {
//     if(!id) {
//         console.log("Provide the id!!");
//         return        
//     }
//     id.toLowerCase()
// }

// truthy: WHAT NOT TO DO =>
// function printAll(strs: string | string[] | null) {
//     if (strs) {
//         if (typeof strs === "object") {
//             for (const s of strs) {
//                 console.log(s);
//             }
//         } else if (typeof strs === "string") {
//             console.log(strs);
//         }
//     }
// }

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

// if fn returns true; it is Fish
function isFish(testVar: Fish | Bird): testVar is Fish {
    return (testVar as Fish).swim !== undefined
}

function getFood(testVar: Fish | Bird) {
    if (isFish(testVar)) {
        testVar
        return "fish food"
    } else {
        testVar
        return "bird food"
    }
}

interface Circle {
    kind: "circle",
    radii: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rect",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

// On adding rectangle this will fall apart if all works
function getTrueShape(shape: Shape) {
    if(shape.kind=="circle") {
        return Math.PI*shape.radii**2
    }
    // return shape.side**2
}

function getArea(shape: Shape) {
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radii**2
        case "square":
            return shape.side**2
        case "rect":
            return shape.length*shape.width
        default:
            const _defaultShape: never = shape
            return _defaultShape
    }
}