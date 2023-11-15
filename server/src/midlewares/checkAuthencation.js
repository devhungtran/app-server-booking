const jwt = require('jsonwebtoken');

const checkAuthenticationMDW = async (req, res, next) => {
  try {
    const token = req.headers.authorization || req.query.token || req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Không tồn tại token' });
    }

    const [, accessToken] = token.split('Bearer ');



    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();

  } catch (error) {
        console.log(error);
    }
}

module.exports = {
  checkAuthenticationMDW,
}
