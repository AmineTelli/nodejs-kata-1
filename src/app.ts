import ExpressModule from './modules/express/express';
import DatabaseModule from './modules/database/database';
import Graphql from './route/route';
import dotenv from 'dotenv';

dotenv.config();
const express = new ExpressModule;
const db = new DatabaseModule;
const graphql = new Graphql(express);

express.init()
.then(() => {
  return db.init();
})
.then(() => {
  console.log("test")
  return graphql.init();
})