function addTwo(num: number): number {
    return num + 2
}

function getUpper(value: string) {
    value.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    console.log("Welcome")
}

let loginUser = (name: string, email: string, isPaid: boolean = false): boolean => {
    return true
}

let myValue = addTwo(5)
getUpper("tatiana")

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spidey", "iman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

signUpUser("abc", "abc@xyz.com", false)
loginUser("s", "s@ab.ca")

function consoleError(errMsg: string): void {
    console.log(errMsg)
}

function handleError(errMsg: string): never {
    throw new Error(errMsg)
}