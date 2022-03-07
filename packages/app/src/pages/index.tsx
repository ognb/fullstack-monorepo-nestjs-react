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
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((el) => {
          return (
            <tr key={el.id}>
              <th scope="row">{el.id}</th>
              <td>{el.firstName}</td>
              <td>{el.lastName}</td>
              <td>{el.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
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
