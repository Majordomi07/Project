import { getCars, deleteCar } from "../models/cars.js";

export const showCars = (req, res) => {
  getCars((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const removeCar = (req, res) => {
  const carID = req.params.id;
  deleteCar(carID, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
