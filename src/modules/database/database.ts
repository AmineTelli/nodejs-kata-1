import mongoose from 'mongoose';
import { Mongoose } from 'mongoose';

export default class DatabaseModule {

    public db: Mongoose;

    constructor() {
        this.db = mongoose;
    }

    public init(): void {
        this.db.connect("mongodb://kata:amineTelli2021@mongodb:27017/admin?authSource=admin", { maxPoolSize: 10, family: 4, serverSelectionTimeoutMS: 5000})
        .catch((err) => {
            console.log(err);
            throw (err);
        });
        this.db.connection.once("open", () => {
            console.log("connected to database !");
        });
    };
};