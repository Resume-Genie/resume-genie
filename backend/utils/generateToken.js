import jwt from 'jsonwebtoken';

const generateToken = (res, userId, name, expiresIn, maxAge) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });

  res.cookie(name, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: maxAge,
  });
};

export default generateToken;
