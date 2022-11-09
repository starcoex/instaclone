import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server
  .listen(6500)
  .then(() => console.log("Server is running on http://localhost:6500/"));
