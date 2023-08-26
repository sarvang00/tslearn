const user = {
    name: "sarvang",
    email: "abc@xyz.com",
    isPaid: false
}
// types
type User = {
    name: string,
    email: string,
    isPaid: boolean
}

function createUser(user: User):User {
    return user
}

createUser({name:"aer", email:"a@bc.com", isPaid: false})

// weirdness
createUser(user)


function createCourse():{courseName: string, price: number}{
    return {courseName: "toda", price: 399}
}