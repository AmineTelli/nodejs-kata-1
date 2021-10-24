import express, { Express } from 'express';

export default class ExpressModule {

    /** Express app */
    private app: Express;

    constructor() {
        this.app = express();
    }

    public init(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.app.listen(3000, () => {
                this.app.use(express.json());
                this.app.use(express.urlencoded({extended: true}));
            })
            .once('error', (error) => reject(error));
            resolve();
        });
    }

    public getApp(): Express {
        return this.app
    }
}