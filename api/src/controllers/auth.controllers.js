const Users = require('../models/User');

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !password || !email)
    return res.status(400).send({ message: 'Please. fill all inputs' });

  const userFound = await Users.findOne({ username: username });
  if (userFound) return res.status(400).json({ message: 'The user exist' });

  const newUser = await new Users({
    username: username,
    email: email,
    password: await Users.encryptPassword(password),
  });
  const saveUser = await newUser.save();

  return res.status(201).json({ message: 'Success register', saveUser });
};

const signin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: 'Please. send your email and password' });

  const user = await Users.findOne({ username: username });
  if (!username)
    return res.status(400).json({ message: 'The user does not exist' });

  const isMatch = await Users.comparePassword(password, user.password);
  if (isMatch) {
    return res.status(200).json({ message: 'success', user });
  }

  return res
    .status(400)
    .json({ message: 'The email or password are incorrect' });
};

module.exports = {
  signup,
  signin,
};
