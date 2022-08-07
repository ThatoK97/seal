import { nanoid } from "nanoid";

function User(id, { name, email, number } = {}) {
    return {
        id,
        name,
        email,
        number
    }
}

const userHolder = {};

const resolvers = {
    getUser: ({ id }) => {
        return User(id, userHolder.id);
    },
    createUser: ({ input }) => {
        const id = nanoid();
        userHolder.input = input;
        return User(id, userHolder.input);
    }
}

export default resolvers;