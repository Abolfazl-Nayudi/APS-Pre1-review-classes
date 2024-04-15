const isAdmin = (req, res, next) => {
  const { token } = req.query;
  if (token) {
    if (token === 'admin') {
      next();
    } else {
      res
        .status(403)
        .json({ success: false, message: 'access denied', data: '' });
    }
  } else {
    res
      .status(403)
      .json({ success: false, message: 'access denied', data: '' });
  }
};

module.exports = { isAdmin };
