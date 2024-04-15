const fs = require('fs');
const { v4: uuid } = require('uuid');
const getAllUsers = (req, res) => {
  const { limit } = req.query;
  // console.log(req.query);
  try {
    const data = fs.readFileSync('./db/data.users.json', 'utf-8');
    const dataArray = JSON.parse(data);

    if (limit) {
      if (parseInt(limit)) {
        res.status(200).json(dataArray.slice(0, parseInt(limit)));
      } else {
        res.status(200).json(dataArray);
      }
    } else {
      res.status(200).json(dataArray);
    }
  } catch (error) {
    console.log(error);
  }
};

const createUser = (req, res) => {
  const { first_name, last_name, email } = req.body;
  const id = uuid();
  try {
    const data = fs.readFileSync('./db/data.users.json', 'utf-8');
    const dataArray = JSON.parse(data);

    dataArray.push({ id, first_name, last_name, email });

    fs.writeFileSync('./db/data.users.json', JSON.stringify(dataArray));
    res.status(201).json({
      success: true,
      message: 'user created successfully',
      data: { id, ...req.body },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: 'internal server error', data: '' });
  }
};

const getSingleUser = (req, res) => {
  const id = req.params.id;

  try {
    const data = fs.readFileSync('./db/data.users.json', 'utf-8');
    const dataArray = JSON.parse(data);

    const selectedUser = dataArray.find((user) => user.id === id);

    if (!selectedUser) {
      res
        .status(404)
        .json({ success: false, message: 'user not found', data: '' });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'user found successfully',
      data: selectedUser,
    });
  } catch (error) {}
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  try {
    const data = fs.readFileSync('./db/data.users.json', 'utf-8');
    const dataArray = JSON.parse(data);
    const selectedUser = dataArray.find((user) => user.id === id);

    if (!selectedUser) {
      res
        .status(404)
        .json({ success: false, message: 'user not found', data: '' });
      return;
    }

    const filteredData = dataArray.filter((user) => user.id !== id);
    fs.writeFileSync('./db/data.users.json', JSON.stringify(filteredData));

    res.status(200).json({
      success: true,
      message: 'user deleted successfully',
      data: selectedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUsers = (req, res) => {
  const { id } = req.params;
  try {
    const data = fs.readFileSync('./db/data.users.json', 'utf-8');
    const dataArray = JSON.parse(data);

    const specificUser = dataArray.find((user) => user.id === id);
    const filteredData = dataArray.filter((user) => user.id !== id);

    const updatedUser = { ...specificUser, ...req.body };

    filteredData.push(updatedUser);

    fs.writeFileSync('./db/data.users.json', JSON.stringify(filteredData));
    res.status(200).json({
      success: true,
      message: 'user updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUsers,
};
