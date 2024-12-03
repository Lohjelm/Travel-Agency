const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

// Handle login and issue JWT token
// TODO Patch security issues
const handleLogin = async (request, response) => {
  const { email, password } = request.body;

  if (typeof email !== "string" || typeof password !== "string") {
    response.status(400).end();
    return;
  }

  const user = await User.findOne({ email })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)
  
  if(!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password"
    })
  }

  const userForToken = {
    id: user._id,
    email: user.email
  }

  const token = jwt.sign(userForToken, process.env.SECRET);

  response.status(200).send({ email: user.email, token })
}

module.exports = {
  handleLogin,
}