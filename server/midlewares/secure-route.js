import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const { TOKEN_SECRET } = process.env;

const secureRoute = async (request, response, next) => {
  const {
    headers: { authorization },
  } = request;

  if (!authorization || !authorization.startsWith('Bearer')) {
    return response.status(401).send({
      message: 'Not authorised request',
    });
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const { user_id } = await jwt.verify(token, TOKEN_SECRET);
    request.headers.userId = user_id;
    next();
  } catch (error) {
    return response.status(401).send({
      message: 'Not authorised request',
    });
  }
};

export default secureRoute;
