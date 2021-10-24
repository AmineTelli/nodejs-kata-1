import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { authorsGet } from '../providers/authorsGet';
import { booksGet } from '../providers/booksGet';
import { magazinesGet } from '../providers/magazinesGet';

export const QuerySchema: GraphQLObjectType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        booksGet: booksGet,
        magazinesGet: magazinesGet,
        authorsGet: authorsGet
    }
});

export const schema: GraphQLSchema = new GraphQLSchema({
    query: QuerySchema
});