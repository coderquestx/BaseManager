import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, from } from '@apollo/client';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

const httpLink = new HttpLink({
    uri: 'http://localhost:8082/graphql',
});

const errorLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        if (response.errors) {
            (response.errors as GraphQLFormattedError[]).forEach((error) => {
                console.error(`[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`);
            });
        }
        return response;
    });
});

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
});

export default client;
