import React from "react";
import { incrementUserAge } from "../constants/external-file";
import UserService from "../services/user.service";

const HomePage = () => {
  const { login, user, getUserInfo, logout } = UserService.useState();

  return (
    <div>
      <h1>Home page</h1>
      {user !== null ? (
        <>
          <h1>Welcome, {user.username} & your age {user.age}</h1>
          <button onClick={getUserInfo}>Get my info</button>
          <button onClick={logout}>Logout</button>
          <button onClick={incrementUserAge}>Increment Your Age</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default HomePage;
