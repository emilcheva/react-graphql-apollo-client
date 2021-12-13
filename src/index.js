import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


const client = new ApolloClient({
  // options go here
  uri: 'https://cats-graphql-apollo-server.herokuapp.com/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
 