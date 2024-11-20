const Subject = require('../models/subject')

const getSubjects = async (req, res, next) => {
  try {
    const allSubjects = await Subject.find()
    return res.status(200).json(allSubjects)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getSubjectByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const subjectByID = await Subject.findById(id)
    return res.status(200).json(subjectByID)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const postSubject = async (req, res, next) => {
  try {
    const newSubject = new Subject({
      nombre: req.body.nombre,
      profesor: req.body.profesor,
      libro: req.body.libro,
      material: req.body.material,
      optativa: req.body.optativa
    })

    if (req.user.username === req.body.profesor) {
      const subjectSaved = await newSubject.save()
      return res.status(201).json(subjectSaved)
    } else {
      return res.status(400).json('No puedes crear este dato')
    }
  } catch (error) {
    return res.status(400).json('No se ha creado la asignatura')
  }
}

const updateSubject = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldSubject = await Subject.findById(id)
    const newSubject = new Subject(req.body)
    newSubject._id = id
    newSubject.material = [...oldSubject.material, ...req.body.material]
    const subjectUpdated = await Subject.findByIdAndUpdate(id, newSubject, {
      new: true
    })
    if (subjectUpdated.profesor === req.user.username) {
      return res.status(200).json(subjectUpdated)
    } else {
      return res.status(400).json('No puedes actualizar este dato')
    }
  } catch (error) {
    res.status(400).json('No se ha actualizado la asignatura')
  }
}

const deleteSubject = async (req, res, next) => {
  try {
    const { id } = req.params
    const subjectDeleted = await Subject.findByIdAndDelete(id)
    return res.status(200).json(subjectDeleted)
  } catch (error) {
    return res.status(400).json('No se ha eliminado la asignatura')
  }
}

module.exports = {
  getSubjects,
  getSubjectByID,
  postSubject,
  updateSubject,
  deleteSubject
}
