const { isAdmin, isAuthTeacher } = require('../../middlewares/auth')

const {
  getSubjects,
  postSubject,
  updateSubject,
  deleteSubject
} = require('../controllers/subject')

const subjectRoutes = require('express').Router()

subjectRoutes.get('/', [isAdmin], getSubjects)
subjectRoutes.post('/', [isAuthTeacher], postSubject)
subjectRoutes.put('/:id', [isAuthTeacher], updateSubject)
subjectRoutes.delete('/:id', [isAdmin], deleteSubject)

module.exports = subjectRoutes
