import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { contacts, state } from './static-data';

const App = () => {
  console.log(state);
  return (
    <div className='App'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
