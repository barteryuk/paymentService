const { Payment } = require("../models");

class Controller {
  static findAll(req, res, next) {
    Payment.findAll({
      order: [["id", "ASC"]],
    })
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((err) => {
        return next(err);
      });
  }

  static findById(req, res, next) {
    let { id } = req.params;
    Payment.findOne({
      where: {
        id,
      },
    })
      .then((data) => {
        if (data) {
          return res.status(200).json({
            data,
            message: "Found",
          });
        } else {
          return next({
            name: "NotFound",
            errors: [{ message: "Payment Not Found " }],
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  }

  static create(req, res, next) {
    let { email, topUp, proof } = req.body;
    let newCreate = {
      email,
      topUp,
      quota: 0,
      proof,
      status: "pending",
    };
    Payment.create(newCreate)
      .then((data) => {
        return res.status(201).json({
          data: data.dataValues,
          message: "Successfully requested new quota top up!!!",
        });
      })
      .catch((err) => {
        return next(err);
      });
  }

  static put(req, res, next) {
    let { id } = req.params;
    let { email, topUp, quota, proof, status } = req.body;
    let newUpdate = {
      email,
      topUp,
      quota,
      proof,
      status,
    };

    Payment.update(newUpdate, {
      where: {
        id,
      },
      returning: true,
    })
      .then((data) => {
        if (data[0]) {
          return res.status(200).json({
            data,
            message: "Successfully updated new quota request",
          });
        } else {
          return next({
            name: "NotFound",
            errors: [{ message: "Payment Not Found" }],
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  }
}

module.exports = Controller;
