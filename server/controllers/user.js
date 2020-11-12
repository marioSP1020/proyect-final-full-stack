import { logingInAnUser, registringAnUser } from '../models/user.js';

export const registerUser = async (request, response) => {
  const { body } = request;
  
  console.log({ body });

  try {
    await registringAnUser(body);

    return response.status(201).send({
      message: `Welcome ${body.email}`,
      token: 'token'
    });
  } catch (error) {
    const { message } = error;
    return response.status(400).send({
      message,
    });
  }
};

export const loginUser = async (request, response) => {  
  const { body } = request;

  try {
    const payload = await logingInAnUser(body);
    return response.status(200).send(payload);
  } catch (error) {
    const { message } = error;
    return response.status(400).send({
      message,
    });
  }
};
