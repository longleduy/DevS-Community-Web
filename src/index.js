import "regenerator-runtime/runtime";
import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import merge from 'lodash/merge';
//Todo: Apollo client
//import createBrowserHistory from 'history/createBrowserHistory';
import { ApolloProvider } from "react-apollo";
import { ApolloLink, split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import { WebSocketLink } from 'apollo-link-ws';

import Favicon from 'react-favicon';
import Logo from "../public/images/logo/devs_logo.png";
import App from './App';
//Todo: Utils
import { userInfoLocalState } from './graphqls/localStates/userInfoLocalState';

const cache = new InMemoryCache({});
const stateLink = withClientState({
    cache,
    ...merge(userInfoLocalState),
})
//Todo: Websocket link
const wsLink = new WebSocketLink({
    uri: `${process.env.WSS}`,
    options: {
        reconnect: true,
    },
    credentials: 'include'
});
//Todo: Http link
const httpLink = createHttpLink({
    uri: `${process.env.HOST}`,
    credentials: 'include'
});
//Todo: Apollo link context
const contextLink = setContext(async (_, { headers }) => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token != null && token != '') {
        return {
            headers: {
                ...headers,
                authorization: `Beare ${token}`
            }
        }
    }
})
const link = ApolloLink.from([stateLink, contextLink, split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return (
            kind === 'OperationDefinition' && operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
)]);
const client = new ApolloClient({
    resolvers: {
        Mutation: {
            mutationUserInfo: (_, args, { cache }) => {
                cache.writeData({
                    data: {
                        queryUserInfo: {
                            __typename: 'UserInfo',
                            userID: args.userInfo.userID,
                            isAuthen: args.userInfo.isAuthen,
                            profileName: args.userInfo.profileName,
                            email: args.userInfo.email,
                            gender: args.userInfo.gender,
                            dateOfBirth: args.userInfo.dateOfBirth,
                            avatar: args.userInfo.avatar
                        }
                    }
                })
                return null
            }
        }
    },
    link,
    cache
});
const data = {
    queryUserInfo: {
        __typename: 'UserInfo',
        userID: null,
        isAuthen: false,
        profileName: null,
        email: null,
        avatar: null,
        dateOfBirth: null,
        gender: null
    }
}
client.onResetStore(() => cache.writeData({ data }));
ReactDOM.render(
    <Fragment>
        <Favicon url={Logo} />
        <ApolloProvider client={client}>
            <HashRouter>
                <App />
            </HashRouter>
        </ApolloProvider>
    </Fragment>, document.querySelector('#root')
);
