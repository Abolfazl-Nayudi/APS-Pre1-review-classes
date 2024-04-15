const fs = require('fs');
const { Router } = require('express');
const { isAdmin } = require('../middleware/isAdmin');
const userRoutes = require('../controllers/user.controller');
const router = Router();

// router.get('/users', userRoutes.getAllUsers);
// router.post('/users', userRoutes.createUser);

router
  .route('/users')
  .get(isAdmin, userRoutes.getAllUsers)
  .post(userRoutes.createUser);

router.get('/users/:id', userRoutes.getSingleUser);
router.delete('/users/:id', isAdmin, userRoutes.deleteUser);
router.patch('/users/:id', userRoutes.updateUsers);

module.exports = {
  router,
};
