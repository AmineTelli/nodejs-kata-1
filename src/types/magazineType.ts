import {GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql'
import { authorType } from './authorType';

export const magazineType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Magazine',
    description: 'Magazine type',
    fields: () => ({
        _id: {type: GraphQLString},
        title: {type: GraphQLString},
        isbn: {type: GraphQLInt!},
        authors: {type: new GraphQLList(GraphQLString)},
        publishedAt: {type: GraphQLString}
    })
});