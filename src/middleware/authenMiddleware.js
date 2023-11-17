import jwt from 'jsonwebtoken';

const authenticationMiddleware = (secretKey) => {
  const middleware = (request, response, next) => {
    const token = request.header('Authorization');

    if (!token) {
      return response.status(401).json({ message: 'Authentication required' });
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      request.user = decoded;
      next();
    } catch (error) {
      return response.status(401).json({ message: 'Invalid token' });
    }
  };

  return middleware;
};

export default authenticationMiddleware;
