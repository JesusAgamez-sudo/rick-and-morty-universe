import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = 'https://rickandmortyapi.com/graphql';

export const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
  },
});