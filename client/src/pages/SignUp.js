import React from 'react';

const SignUp = () => {
  return (
    <form action="">
      <label htmlFor="name">Name</label>
      <input for="name" type="text" />

      <br />

      <label htmlFor="mail">Email</label>
      <input for="mail" type="email" />
      
      <br />

      <label htmlFor="password">Password</label>
      <input for="password" type="password" />
    </form>
  );
};

export default SignUp;
