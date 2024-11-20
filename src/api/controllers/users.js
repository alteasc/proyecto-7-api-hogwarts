const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find()
      .populate('asignaturas')
      .populate('notasAsignaturas')
      .populate('notasAlumnos')
    return res.status(200).json(allUsers)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getUsersById = async (req, res, next) => {
  try {
    const { id } = req.params

    const userById = await User.findById(id)
      .populate('asignaturas')
      .populate('notasAsignaturas')
      .populate('notasAlumnos')
    // console.log(userById._id)
    // console.log(req.user._id)

    if (userById.username === req.user.username) {
      return res.status(200).json(userById)
    } else {
      return res.status(400).json('No puedes acceder a esta petición')
    }
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    })

    const duplicatedUser = await User.findOne({ username: req.body.username })

    if (duplicatedUser) {
      return res.status(400).json('Ese nombre de usuario ya existe')
    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json('No se ha creado el usuario')
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
      return res.status(400).json('El usuario o la contraseña son incorrectos')
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('El usuario o la contraseña son incorrectos')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldUser = await User.findById(id)
    const newUser = new User(req.body)
    newUser._id = id
    const asignaturas = req.body.asignaturas || []
    newUser.asignaturas = [...oldUser.asignaturas, ...asignaturas]
    const notasAsignaturas = req.body.notasAsignaturas || []
    newUser.notasAsignaturas = [
      ...oldUser.notasAsignaturas,
      ...notasAsignaturas
    ]
    const notasAlumnos = req.body.notasAlumnos || []
    newUser.notasAlumnos = [...oldUser.notasAlumnos, ...notasAlumnos]

    const userUpdated = await User.findByIdAndUpdate(
      id,
      newUser,
      { $addToSet: { asignaturas: newUser.asignaturas } },
      {
        new: true
      }
    )

    return res.status(200).json(userUpdated)
  } catch (error) {
    console.log(error)
    res.status(400).json('No se ha actualizado el usuario')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = await User.findByIdAndDelete(id)
    return res.status(200).json(userDeleted)
  } catch (error) {
    return res.status(400).json('No se ha eliminado el alumno')
  }
}

module.exports = {
  getUsers,
  getUsersById,
  register,
  login,
  updateUser,
  deleteUser
}
