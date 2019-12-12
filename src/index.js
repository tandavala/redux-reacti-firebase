import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import { createStore, combineReducers, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from "react-redux-firebase";

import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyD_z7686Kc-leHNofo9vgP5hCnS9ctqTmc",
  authDomain: "olamundo-dfa03.firebaseapp.com",
  databaseURL: "https://olamundo-dfa03.firebaseio.com",
  projectId: "olamundo-dfa03",
  storageBucket: "olamundo-dfa03.appspot.com",
  messagingSenderId: "239600228669",
  appId: "1:239600228669:web:c8bf7be765a59a98828d54",
  measurementId: "G-TT8T35M2X0"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users"
};

ReactDOM.render(<App />, document.getElementById("root"));
