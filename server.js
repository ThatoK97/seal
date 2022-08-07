import express from "express";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers.js";
import schema from "./schema.js";

// initialise express app
const app = express();
const port = 8080 ?? 8081;

app.get("/", (req, res) => {
    res.send("GraphQL on the move");
})

// define rootValue for graphqlHTTP
const root = resolvers;

app.use("/ql", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
    
}))

app.listen(port, () => console.log(`Listening on port: ${port}`));