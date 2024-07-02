import { getData, postData } from "../utils/fetcherAPI";
const BASE_URL = import.meta.env.VITE_API_URL;
export const registerNewUser = async (data) => {
  try {
    const result = await postData(`${BASE_URL}/user`, data);
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const loginUser = async (data) => {
  try {
    const result = await postData(`${BASE_URL}/user/login`, data);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const getAllTodoOfOneUser = async (token) => {
  try {
    const result = await getData(`${BASE_URL}/user/todos/show`, token);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
