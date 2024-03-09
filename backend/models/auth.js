import db from "../config/db.js";

export const authRegister = (data, result) => {
  const query = "INSERT INTO users(name, email, password) VALUES (?, ?, ?)";
  db.query(query, [data.name, data.email, data.password], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const authLogin = (data, result) => {
  const query = "SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1";
  db.query(query, [data.email, data.password], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      if (results.length > 0) {
        result(null, results);
      } else {
        result(401, null);
      }
    }
  });
};
