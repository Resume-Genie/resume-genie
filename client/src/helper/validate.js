import toast from 'react-hot-toast';
import { authenticate } from './helper';

export async function loginValidate(values) {
  let errors = emailVerify({}, values);

  if (values.email) {
    const { status } = await authenticate(values.email);

    if (status !== 200) {
      errors.exist = toast.error('User does not exist...!');
    } else {
      errors = passwordVerify(errors, values);
    }
  }

  return errors;
}

export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error('Password not match...!');
  }

  return errors;
}

export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
}

function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error('Password Required...!');
  } else if (values.password.includes(' ')) {
    errors.password = toast.error('Wrong Password...!');
  } else if (values.password.length < 8) {
    errors.password = toast.error(
      'Password must be more than 8 characters long'
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error('Password must have special character');
  }

  return errors;
}

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error('Username Required...!');
  } else if (values.username.includes(' ')) {
    error.username = toast.error('Username cannot contain blank space!');
  }

  return error;
}

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error('Email Required...!');
  } else if (values.email.includes(' ')) {
    error.email = toast.error('Wrong Email...!');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error('Invalid email address...!');
  }

  return error;
}
