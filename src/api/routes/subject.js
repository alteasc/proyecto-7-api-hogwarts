const { isAdmin, isTeacher, isAuth } = require('../../middlewares/auth')

const {
  getSubjects,
  postSubject,
  updateSubject,
  deleteSubject,
  getSubjectByID
} = require('../controllers/subject')

const subjectRoutes = require('express').Router()

subjectRoutes.get('/', [isAuth], getSubjects)
subjectRoutes.get('/:id', [isAuth], getSubjectByID)
subjectRoutes.post('/', [isTeacher], postSubject)
subjectRoutes.put('/:id', [isTeacher], updateSubject)
subjectRoutes.delete('/:id', [isAdmin], deleteSubject)

module.exports = subjectRoutes
