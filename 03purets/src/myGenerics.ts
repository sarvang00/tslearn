const score: Array<number> = []
const names: Array<string>= []

function identityOne(val: number | boolean): boolean|number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(false)

function identityFour<T>(val: T): T {
    return val
}

identityFour("false")

interface Bottle {
    brand: string,
    type: number
}

// for your own
// identityFour<Bottle>({})

function getSearchProducts<T>(value: T[]): T {
    return value[0]
}

const getMoreSearchProducts = <T>(ipVals: T[]):T => {
    return ipVals[0]
}

interface Database {
    conn: string,
    uname: string,
    passwd: string
}

function anotherFunc<T, U extends Database>(val1: T, val2: U):object {
    return {
        val1,
        val2
    }
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class MathCourse<T> {
    public cart: T[] = []
    
    addToCart(product: T) {
        this.cart.push(product)
    }
}