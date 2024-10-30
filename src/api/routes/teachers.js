const { isAuthTeacher, isAdmin } = require('../../middlewares/auth')
const {
  getTeachers,
  updateTeacher,
  deleteTeacher,
  register,
  login
} = require('../controllers/teachers')

const teacherRoutes = require('express').Router()

teacherRoutes.get('/', [isAdmin], getTeachers)
teacherRoutes.post('/register', register)
teacherRoutes.post('/login', login)
teacherRoutes.put('/:id', [isAdmin], updateTeacher)
teacherRoutes.delete('/:id', [isAdmin], deleteTeacher)

module.exports = teacherRoutes
