const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    asignaturas: [{ type: mongoose.Types.ObjectId, ref: 'subjects' }],
    notasAsignaturas: [{ type: mongoose.Types.ObjectId, ref: 'scores' }],
    asignatura: { type: String },
    notasAlumnos: [{ type: mongoose.Types.ObjectId, ref: 'scores' }],
    rol: {
      type: String,
      required: true,
      enum: ['admin', 'user', 'teacher'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', userSchema, 'users')

module.exports = User
