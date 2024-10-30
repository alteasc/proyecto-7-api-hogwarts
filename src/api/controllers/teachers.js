const { generateSign } = require('../../config/jwt')
const Teacher = require('../models/teachers')
const bcrypt = require('bcrypt')

const getTeachers = async (req, res, next) => {
  try {
    const allTeachers = await Teacher.find()
    return res.status(200).json(allTeachers)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const register = async (req, res, next) => {
  try {
    const newTeacher = new Teacher({
      username: req.body.username,
      password: req.body.password,

      rol: 'teacher'
    })

    const duplicatedTeacher = await Teacher.findOne({
      username: req.body.username
    })

    if (duplicatedTeacher) {
      return res.status(400).json('Ese nombre de usuario ya existe')
    }

    const teacherSaved = await newTeacher.save()
    return res.status(201).json(teacherSaved)
  } catch (error) {
    return res.status(400).json('No se ha creado el profesor')
  }
}

const login = async (req, res, next) => {
  try {
    const teacher = await Teacher.findOne({ username: req.body.username })

    if (!teacher) {
      return res.status(400).json('El usuario o la contraseña son incorrectos')
    }

    if (bcrypt.compareSync(req.body.password, teacher.password)) {
      const token = generateSign(teacher._id)
      return res.status(200).json({ teacher, token })
    } else {
      return res.status(400).json('El usuario o la contraseña son incorrectos')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const updateTeacher = async (req, res, next) => {
  try {
    const { id } = req.params
    const newTeacher = new Teacher(req.body)
    newTeacher._id = id
    const teacherUpdated = await Teacher.findByIdAndUpdate(id, newTeacher, {
      new: true
    })
    return res.status(200).json(teacherUpdated)
  } catch (error) {
    res.status(400).json('No se ha actualizado el profesor')
  }
}

const deleteTeacher = async (req, res, next) => {
  try {
    const { id } = req.params
    const teacherDeleted = await Teacher.findByIdAndDelete(id)
    return res.status(200).json(teacherDeleted)
  } catch (error) {
    return res.status(400).json('No se ha eliminado el profesor')
  }
}

module.exports = {
  getTeachers,
  updateTeacher,
  register,
  login,
  deleteTeacher
}
