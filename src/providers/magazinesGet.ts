import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { magazineType } from "../types/magazineType";
import { MagazineModel } from "../models/magazineModel";

export const magazinesGet = {
    type: new GraphQLList(magazineType),
    args: {
        isbn: {
            name: "isbn",
            type: GraphQLString
        }
    },
    async resolve(_: any, args:any) {
        return await MagazineModel.find()
    }
};