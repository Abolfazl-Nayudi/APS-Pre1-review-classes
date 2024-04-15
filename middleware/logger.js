const logger = (req, res, next) => {
  console.log(
    `The API has a new method: ${req.method} request for URL: ${req.url}`
  );

  next();
};

module.exports = {
  logger,
};
