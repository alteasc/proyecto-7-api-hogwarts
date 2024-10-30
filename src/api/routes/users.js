const { isAdmin, isAuth, isAuthAlumn } = require('../../middlewares/auth')
const {
  register,
  login,
  updateUser,
  deleteUser,
  getUsersById,
  getUsers
} = require('../controllers/users')

const usersRoutes = require('express').Router()

usersRoutes.get('/', [isAdmin], getUsers)
usersRoutes.get('/:id', [isAuthAlumn], getUsersById)
usersRoutes.post('/register', register)
usersRoutes.post('/login', login)
usersRoutes.put('/:id', [isAdmin], updateUser)
usersRoutes.delete('/:id', [isAuth], deleteUser)

module.exports = usersRoutes
