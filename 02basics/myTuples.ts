// const user: (string|number)[] = [1, "ab"]
let tUser: [string, number, boolean]
tUser = ["ab", 121, false]

let rgb: [number, number, number] = [122, 18, 255]

type User = [number, string]

const newUser: User = [12, "abc"]
console.log(newUser)
newUser[1] = "bcd"
console.log(newUser)
// wild wild typescript
newUser.push(1, "two", "three")
console.log(newUser)
newUser.push(2)
console.log(newUser)