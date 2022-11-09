import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server";

const client = new PrismaClient();

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    movies: [Movie]
    movie(id: Int!): Movie
  }
  type Mutation {
    createMovie(title: String!, year: Int!, genre: String): Movie
    deleteMovie(id: String!): Boolean
  }
`;

const resolvers = {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_, { id }) => ({ title: "hello", year: 2022 }),
  },
  Mutation: {
    createMovie: (_, { title, year, genre }) => {
      client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      });
    },
    deleteMovie: (_, { id }) => {
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen(6500)
  .then(() => console.log("Server is running on http://localhost:6500/"));
