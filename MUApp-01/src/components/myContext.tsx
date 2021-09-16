import React from 'react';
import { createContext } from 'vm';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const MyContext = React.createContext<string | null>(null);

export default MyContext;