import { getData, postData, deleteData, updateData } from "../utils/fetcherAPI";
const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllTodoData = async () => {
  try {
    const result = await getData(`${BASE_URL}/todo`);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOneTodoData = async (id) => {
  try {
    return await getData(`${BASE_URL}/todo/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};

export const createNewTodo = async (data, token) => {
  try {
    console.log("hi");
    const result = await postData(`${BASE_URL}/todo`, data, token);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const updateTodoData = async (id, data) => {
  try {
    const result = await updateData(`${BASE_URL}/todo/${id}`, data);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const deleteTodoData = async (id) => {
  try {
    const result = await deleteData(`${BASE_URL}/todo/${id}`);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
