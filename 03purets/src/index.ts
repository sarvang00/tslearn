// class User {
//     public email: string
//     private name: string
//     readonly city: string = "ahm"

//     constructor(email: string, name: string) {
//         this.email=email
//         this.name=name
//     }
// }

class User {
    protected _courseCount = 1

    readonly city: string = "ahm"
    
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
        this.email=email
        this.name=name
    }

    private deleteToken() {
        console.log("token deleted")
    }

    get AppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum: number) {
        if (courseNum<=1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class ExtendedUser extends User {
    isFamily: boolean = true

    changeCourseCount() {
        this._courseCount = 4
    }
}

const sdave = new User("a@bc.com", "sdave")
console.log(sdave.city)