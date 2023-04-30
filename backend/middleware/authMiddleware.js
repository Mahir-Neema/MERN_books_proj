const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ msg: 'Authentication failed' });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: 'Authentication failed' });
  }
};
