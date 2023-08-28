abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number {
        // calculation
        return 0
    }
}

// const ptake = new TakePhoto("test", "Test")

class CamApp extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia");
        
    }
}

const cApp = new CamApp("test", "Test", 5)
console.log(cApp.getReelTime());