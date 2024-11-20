const { isAdmin, isTeacher } = require('../../middlewares/auth')

const {
  getScores,
  postScore,
  updateScore,
  deleteScore
} = require('../controllers/scores')

const scoreRoutes = require('express').Router()

scoreRoutes.get('/', [isAdmin], getScores)
scoreRoutes.post('/', [isTeacher], postScore)
scoreRoutes.put('/:id', [isTeacher], updateScore)
scoreRoutes.delete('/:id', [isTeacher], deleteScore)

module.exports = scoreRoutes
