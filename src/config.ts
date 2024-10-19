export class Config {
    private canvas_url: string;

    constructor() {
        this.canvas_url = "https://gatech.instructure.com/api/v1/courses";
    }

    public getCanvasUrl() {
        return this.canvas_url;
    }
}