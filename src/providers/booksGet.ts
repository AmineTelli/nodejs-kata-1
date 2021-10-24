import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { bookType } from "../types/bookType";
import { BookModel } from "../models/bookModel";

export const booksGet = {
    type: new GraphQLList(bookType),
    args: {
        isbn: {
            name: "isbn",
            type: GraphQLString
        },
        authors: {
            name: "authors",
            type: new GraphQLList(GraphQLString)
        }
    },
    async resolve(_: any, args:any) {
        return await BookModel.find();
    }
};