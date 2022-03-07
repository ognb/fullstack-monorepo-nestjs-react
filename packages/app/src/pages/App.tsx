import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { GetServerSideProps, NextPage } from "next";

export const App: NextPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `  users{
    id
    firstName
  	lastName
    email
  }`,
    }),
  });
  const data = await res.json();
  console.log("test");

  // Pass data to the page via props
  return { props: { data } };
};

export default App;
