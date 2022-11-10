import { ApolloServer } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({
  schema,
});

server
  .listen(6500)
  .then(() => console.log("Server is running on http://localhost:6500/"));
