let score: number | string

score = 33
score = "12 runs"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let sdave: User | Admin = {
    name: "abc",
    id: 123
}

sdave = {username:"sd", id:123}

function getDbId(id: number | string) {
    if (typeof id == "string") {
        id.toLowerCase()
    } else {
        id +=1
    }
    console.log(`DB id is: ${id}`)
}

getDbId("1")
getDbId(1)

// arrays
const data: number[] = [1, 2, 3, 4]
const data2: string[] = ["1", "2", "3", "4"]
const data3: (string|number|boolean)[] = [1, "2", "3", "4", false]

let seatAlottment: "aisle"|"middle"|"window"

seatAlottment="aisle"