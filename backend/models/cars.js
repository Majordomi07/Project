import db from "../config/db.js";

export const getCars = (result) => {
  db.query("SELECT * FROM cars", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const deleteCar = (carID, result) => {
  db.query("DELETE FROM cars WHERE carID = ?", [carID], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
