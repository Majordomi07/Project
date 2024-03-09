import { authRegister, authLogin } from "../models/auth.js";

export const register = (req, res) => {
  const data = req.body;
  authRegister(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const login = (req, res) => {
  const data = req.body;
  authLogin(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
