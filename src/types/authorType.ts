import {GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql'
import { bookType } from './bookType';

export const authorType = new GraphQLObjectType({
    name: 'Author',
    description: 'Author type',
    fields: () => ({
        _id: {type: GraphQLString},
        email: {type: GraphQLString},
        firstname: {type: GraphQLString},
        lastname: {type: GraphQLString},
        books: {type: new GraphQLList(bookType)}
    })
});