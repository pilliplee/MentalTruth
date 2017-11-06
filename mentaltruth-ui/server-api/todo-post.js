module.exports = function (req, res, next) {
  if (req.url === '/todos' && req.method === 'POST') {
    req.body.done = false;
  }
  next();
};
