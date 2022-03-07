import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

type Users = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

interface PageProps {
  users: Users[];
}

export const App: NextPage<PageProps> = ({ users }) => {
  console.log(users);
  return <div className="App">test</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `
    query {
      users{
        id
        firstName
        lastName
        email
      }
    }`;
  const {
    data: {
      data: { users },
    },
  } = await axios.post(`http://localhost:3001/graphql`, { query });
  return { props: { users } };
};

export default App;
