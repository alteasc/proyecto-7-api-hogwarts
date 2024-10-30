const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema(
  {
    alumno: { type: String, required: true },
    asignatura: { type: String, required: true },
    curso: { type: String, required: true },
    calificacion: {
      type: String,
      required: true,
      enum: [
        'Extraordinario',
        'Supera las expectativas',
        'Aceptable',
        'Insatisfactorio',
        'Desastroso',
        'Troll'
      ]
    }
  },
  {
    timestamps: true,
    collection: 'scores'
  }
)

const Score = mongoose.model('scores', scoreSchema, 'scores')

module.exports = Score
