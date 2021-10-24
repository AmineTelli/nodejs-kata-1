import { Document, Schema, Model, model, ObjectId } from 'mongoose';

export interface IAuthor extends Document {
    _id: ObjectId,
    email: string,
    firstname: string,
    lastname: string
};

const AuthorSchema: Schema = new Schema({
    email: {type: String},
    firstname: {type: String},
    lastname: {type: String}
});

export const AuthorModel: Model<IAuthor> = model('authors', AuthorSchema)