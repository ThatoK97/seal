import { buildSchema } from "graphql";

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        email: String
        number: Int
    }

    type Query {
        getUser(id: ID): User
    }

    input UserInput {
        id: ID
        name: String!
        email: String!
        number: Int!
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`);

export default schema;