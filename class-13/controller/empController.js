const EmpModel = require("../model/employModel");

const createEmploy = async (req, res) => {
const data = new EmpModel(req.body);
  const result = await data.save();

  res.json({ msg: "data created successfully", data: result });
};


module.exports = {createEmploy};