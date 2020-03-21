function asyncWrap(fn) {
  return function (req, res, next) {
    try {
      return fn(req, res).catch(next);
    } catch (e) {
      next(e);
      return;
    }
  }
}

module.exports = asyncWrap;