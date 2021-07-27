const Users = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    return res.json(users);
  } catch (error) {
    res.json(error);
  }
};

module.exports = getUsers;
