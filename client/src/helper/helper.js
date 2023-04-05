import axios from 'axios';
import jwt_decode from 'jwt-decode';

if (process.env.REACT_APP_ENV === 'development')
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
else {
  axios.defaults.baseURL = process.env.REACT_APP_PROD_SERVER_DOMAIN;
}

export async function getUsername() {
  const token = localStorage.getItem('token');
  if (!token) return Promise.reject('Cannot find Token');
  let decode = jwt_decode(token);
  return decode;
}

export async function authenticate(email) {
  try {
    return await axios.post('/api/authenticate', { email });
  } catch (error) {
    return { error: "User doesn't exist...!" };
  }
}

export async function getUser({ username }) {
  try {
    const { data } = await axios.get(`/api/user/${username}`);
    return { data };
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
}

export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`/api/register`, credentials);

    let { username, email } = credentials;

    if (status === 201) {
      await axios.post('/api/mail/registerMail', {
        username,
        userEmail: email,
        text: msg,
      });
    }

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function verifyPassword({ email, password }) {
  try {
    if (email) {
      const { data } = await axios.post('/api/login', { email, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match...!" });
  }
}

export async function updateUser(response) {
  try {
    const token = await localStorage.getItem('token');
    const data = await axios.put('/api/updateuser', response, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile...!" });
  }
}

export async function generateOTP(email) {
  try {
    const {
      data: { code, username },
      status,
    } = await axios.get('/api/generateOTP', { params: { email } });

    if (status === 201) {
      await axios.post('/api/mail/sendOtp', {
        userEmail: email,
        OTP: code,
        username,
      });
    }
    return Promise.resolve({ code, username });
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function verifyOTP({ email, code }) {
  try {
    const { data, status } = await axios.get('/api/verifyOTP', {
      params: { email, code },
    });
    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function resetPassword({ email, password }) {
  try {
    const { data, status } = await axios.put('/api/resetPassword', {
      email,
      password,
    });

    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}

// export async function uploadFile({ file, email }) {
//   try {
//     console.log(file);
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('fileNames', file.name);

//     const data = await axios
//       .post('/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//       });

//     return Promise.resolve(data.config.data);
//   } catch (error) {
//     return Promise.reject({ error });
//   }
// }
