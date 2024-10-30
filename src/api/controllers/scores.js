const Score = require('../models/scores')

const getScores = async (req, res, next) => {
  try {
    const allScores = await Score.find()
    return res.status(200).json(allScores)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getScoresBySubject = async (req, res, next) => {
  try {
    const { asignatura } = req.params

    const scoreBySubject = await Score.find({ asignatura })
    // console.log(scoreBySubject[0].asignatura)
    // console.log(req.teacher.asignatura)

    for (const element of scoreBySubject) {
      if (element.asignatura === req.teacher.asignatura) {
        return res.status(200).json(scoreBySubject)
      } else {
        return res.status(400).json('No puedes acceder a estos datos')
      }
    }
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const postScore = async (req, res, next) => {
  try {
    const newScore = new Score({
      alumno: req.body.alumno,
      asignatura: req.body.asignatura,
      curso: req.body.curso,
      calificacion: req.body.calificacion
    })
    // console.log(req.teacher.asignatura)
    // console.log(req.body.asignatura)

    if (req.teacher.asignatura === req.body.asignatura) {
      const scoreSaved = await newScore.save()
      return res.status(201).json(scoreSaved)
    } else {
      return res.status(400).json('No puedes crear este dato')
    }
  } catch (error) {
    return res.status(400).json('No se ha creado la calificación')
  }
}

const updateScore = async (req, res, next) => {
  try {
    const { id } = req.params
    const newScore = new Score(req.body)
    newScore._id = id
    const scoreUpdated = await Score.findByIdAndUpdate(id, newScore, {
      new: true
    })

    if (scoreUpdated.asignatura === req.teacher.asignatura) {
      return res.status(200).json(scoreUpdated)
    } else {
      return res.status(400).json('No puedes actualizar este dato')
    }
  } catch (error) {
    res.status(400).json('No se ha actualizado la calificación')
  }
}

const deleteScore = async (req, res, next) => {
  try {
    const { id } = req.params
    const scoreDeleted = await Score.findByIdAndDelete(id)

    if (scoreDeleted.asignatura === req.teacher.asignatura) {
      return res.status(200).json(scoreDeleted)
    } else {
      return res.status(400).json('No puedes borrar estos datos')
    }
  } catch (error) {
    return res.status(400).json('No se ha eliminado la calificación')
  }
}

module.exports = {
  getScores,
  getScoresBySubject,
  updateScore,
  postScore,
  deleteScore
}
