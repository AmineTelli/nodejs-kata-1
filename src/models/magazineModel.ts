import { Document, Schema, Model, model, ObjectId } from 'mongoose';

export interface IMagazine extends Document {
    _id: ObjectId,
    title: string,
    isnb: string,
    authors: Array<string>,
    publishedAt: string
};

const MagazineSchema: Schema = new Schema({
    title: {type: String},
    isnb: {type: String},
    authors: {type: Array(String)},
    publishedAt: {type: String}
});

export const MagazineModel: Model<IMagazine> = model('magazines', MagazineSchema)