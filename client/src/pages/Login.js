import React from 'react';

const login = () => {
  return (
    <form action="">
      <label htmlFor="mail">Email</label>
      <input for="mail" type="email" />

      <br />

      <label htmlFor="password">Password</label>
      <input for="password" type="password" />
    </form>
  );
};

export default login;
