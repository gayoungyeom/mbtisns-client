import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',  
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
    
    if (networkError) console.log('NetworkError');
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, httpLink]),
});

export default client;