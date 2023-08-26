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