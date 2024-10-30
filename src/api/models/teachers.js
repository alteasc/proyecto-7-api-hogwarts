const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const teacherSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    asignatura: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ['admin', 'user', 'teacher'],
      default: 'teacher'
    }
  },
  {
    timestamps: true,
    collection: 'teachers'
  }
)
teacherSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const Teacher = mongoose.model('teachers', teacherSchema, 'teachers')

module.exports = Teacher
