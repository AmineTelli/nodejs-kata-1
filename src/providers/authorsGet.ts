import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { authorType } from "../types/authorType";
import { AuthorModel } from "../models/authorModel";

export const authorsGet = {
    type: new GraphQLList(authorType),
    args: {
        isbn: {
            name: "isbn",
            type: GraphQLString
        }
    },
    async resolve(_: any, args:any) {
        return await AuthorModel.find()
    }
};