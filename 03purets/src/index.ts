class User {
    email: string
    name: string
    readonly city: string = "ahm"

    constructor(email: string, name: string) {
        this.email=email
        this.name=name
    }
}

const sdave = new User("a@bc.com", "sdave")
console.log(sdave.city)