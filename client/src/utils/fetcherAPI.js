import axios from "axios";

export const getData = async (url, token = null) => {
  try {
    const response = await axios.get(
      url,
      token && {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || error.response.data.msg);
  }
};

export const updateData = async (url, data) => {
  try {
    const response = await axios.patch(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || error.response.data.msg);
  }
};

export const deleteData = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || error.response.data.msg);
  }
};

export const postData = async (url, data, token = null) => {
  try {
    const response = await axios.post(
      url,
      data,
      token && {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.error || error.response.data.msg);
  }
};
