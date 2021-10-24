import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql'
import { authorType } from './authorType';

export const bookType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Book',
    description: 'Book type',
    fields: () => ({
        _id: {type: GraphQLString},
        title: {type: GraphQLString},
        isbn: {type: GraphQLID},
        authors: {type: new GraphQLList(GraphQLString)},
        description: {type: GraphQLString}
    })
});