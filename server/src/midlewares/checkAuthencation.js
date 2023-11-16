const jwt = require('jsonwebtoken');

const checkAuthenticationMDW = async (req, res, next) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldmh1bmd0cmFuIiwiZW1haWwiOiJkZXZodW5ndHJhbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDAwODUyNzAsImV4cCI6MTcwMjY3NzI3MH0.IUzUUfRPrTmrUzWDhQddI4UiJqveCdq-GhHxAmPF9rY"

    if (!token) {
      return res.status(401).json({ message: 'Không tồn tại token' });
    }

    
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();

    } catch (error) {
        res.status(500).json({ message: 'Không tồn tại token' });
    }
}

module.exports = {
  checkAuthenticationMDW,
}
