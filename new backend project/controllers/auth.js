const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../config/keys");

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    // проверка пароля
    const passwordResult = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );

    if (passwordResult) {
      // генерация токена, пароли совпали
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );

      res.status(200).json({
        token: `Bearer ${token}`,
      });
    } else {
      // пароли не совпали
      res.status(401).json({
        message: "Пароли не совпадают. Поробуте снова.",
      });
    }
  } else {
    // пользователя нет ошибка
    res.status(404).json({
      message: "пользователь с таким email не найден",
    });
  }
};

module.exports.register = async function (req, res) {
  // email, password

  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    // Пользователь сущ. нужно отдать ошибку
    res.status(409).json({
      message: "Такой email уже занят. Попробуйте другой",
    });
  } else {
    // Нужно создать пользователя
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (e) {
      // обработать ошибку
      console.log(e);
    }
  }

  // res.status(200).json({
  //   email: req.body.email,
  //   password: req.body.password,
  // });
};
