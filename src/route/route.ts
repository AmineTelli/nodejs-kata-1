import { Express } from "express";
import ExpressModule from "../modules/express/express";
import { graphqlHTTP } from 'express-graphql';
import { schema } from "../models/schema";

export default class Graphql {

    public app: Express;

    constructor(
        express: ExpressModule
    ) {
        this.app = express.getApp();
    }

    public init(): void {
        this.app.use(
            '/graphql',
            graphqlHTTP({
              schema: schema,
              graphiql: true
            })
          );
    }
};