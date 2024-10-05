// controllers/AuthController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password, email, description, gender, dateOfBirth } = req.body;
  const profilePic = req.file ? `/uploads/${req.file.filename}` : null; // Store the file path if uploaded
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
      description,
      profilePic,
      gender,
      dateOfBirth
    });
    const token = jwt.sign({ userId: user.id }, 'sidharthyadav1233455');
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error registering user' });
  }
}

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, 'sidharthyadav1233455');
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      res.redirect("/");
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};

module.exports = { register, login };
