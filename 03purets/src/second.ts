// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }

// interface Story {
//     createStory(): void
// }

// class CamApp implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){
//         cameraMode = "";
//         filter = "";
//         burst = 0
//     }
// }

// class CloneApp implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ){
//         cameraMode = "";
//         filter = "";
//         burst = 0
//         short = "yea"
//     }

//     createStory(): void {
//         console.log("Story created")
//     }
// }