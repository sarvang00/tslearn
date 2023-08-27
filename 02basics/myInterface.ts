interface defaultUser {
    email: string,
    userId: number,
    googleToken?: string,
    readonly dbId: number
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

// "re-opening"
interface defaultUser {
    gitHubToken: string
}

// "extending"
interface Admin extends defaultUser {
    role: "admin" | "TA" | "learner"
}

const myUser: Admin = {
    email: "a@abc.com", userId: 123, dbId: 11, startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "abc", disc: 10) => {
        return 10
    },
    gitHubToken: "github",
    role: "TA"
}

myUser.email = "a@bc.com"
// myUser.dbId=12