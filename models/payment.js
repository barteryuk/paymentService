"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Payment extends Model {}

  Payment.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Email cannot be null",
          },
          notEmpty: {
            args: true,
            msg: "Email cannot be empty string",
          },
          isEmail: {
            args: false,
            msg: "Please enter correct email format",
          },
        },
      },
      topUp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        min: {
          notNull: {
            args: true,
            msg: "Top Up value cannot be null",
          },
          notEmpty: {
            args: true,
            msg: "Top Up value cannot be empty string",
          },
          args: 1,
          msg: "Top Up value must be greater or equal than 1",
        },
      },
      quota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        min: {
          notNull: {
            args: true,
            msg: "Quota value cannot be null",
          },
          notEmpty: {
            args: true,
            msg: "Quota value cannot be empty string",
          },
          args: 1,
          msg: "Quota value must be greater or equal than 1",
        },
      },
      proof: DataTypes.STRING,
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Status cannot be null",
          },
          notEmpty: {
            args: true,
            msg: "Status cannot be empty string",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );

  Payment.associate = function (models) {
    // associations can be defined here
  };
  return Payment;
};
