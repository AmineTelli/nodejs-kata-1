import { Document, Schema, Model, model, ObjectId } from 'mongoose';

export interface IBook extends Document {
    _id: ObjectId,
    title: string,
    isnb: string,
    authors: Array<string>,
    description: string
};

const BookSchema: Schema = new Schema({
    title: {type: String},
    isnb: {type: String},
    authors: {type: Array(String)},
    description: {type: String}
});

export const BookModel: Model<IBook> = model('books', BookSchema)