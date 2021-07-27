const clickerModel = require("../models/clicker");

module.exports.getCounter = async function (req, res) {
  try {
    let counter = await clickerModel.find();

    res.status(200).json(counter);
    // res.status(200).json(counter[counter]);
  } catch (error) {
    console.log(error);
  }
};

module.exports.createCounter = async function (req, res) {
  let counter = new clickerModel({
    counter: 0,
  });
  try {
    await counter.save();
    res.status(200).json({
      counter: 0,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports.updateCounter = function (req, res) {
  // const { counter } = req.body;
  // const objectClicker = await clickerModel.find({
  //   _id: ObjectId("61001f751d3dd4187071a0c8"),
  // });
  // try {
  //   await res.status(200).json(objectClicker);
  // } catch (e) {
  //   console.log(e);
  // }
};
