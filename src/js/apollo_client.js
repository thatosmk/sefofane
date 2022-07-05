import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";

const uri = new HttpLink({
  uri: "https://api.spacex.land/graphql/",
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link:  ApolloLink.from([uri])
});
