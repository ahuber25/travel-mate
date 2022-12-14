import React from "react";
import { 
  Route,
  Routes } from "react-router-dom";
  import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
import Nav from './components/Nav/index';
import Header from './components/Header';
import Home from './components/Home/index';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import Calendar from './components/Calendar/index';
import Days from './components/Days/index';
import Footer from './components/Footer';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
    return (
      <ApolloProvider client={client}>
      <div>
          <Nav></Nav>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/calendar" element={<Calendar/>}/>
            <Route exact path="/days" element={<Days/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
          </Routes>
          <Footer/>
      </div>
      </ApolloProvider>
    );
}

export default App;
