const { isAdmin, isAuthTeacher } = require('../../middlewares/auth')

const {
  getScores,
  postScore,
  updateScore,
  deleteScore,
  getScoresBySubject
} = require('../controllers/scores')

const scoreRoutes = require('express').Router()

scoreRoutes.get('/', [isAdmin], getScores)
scoreRoutes.get('/asignatura/:asignatura', [isAuthTeacher], getScoresBySubject)
scoreRoutes.post('/', [isAuthTeacher], postScore)
scoreRoutes.put('/:id', [isAuthTeacher], updateScore)
scoreRoutes.delete('/:id', [isAuthTeacher], deleteScore)

module.exports = scoreRoutes
