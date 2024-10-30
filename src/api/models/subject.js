const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    profesor: { type: String },
    libro: { type: String, required: true },
    material: [
      {
        type: String,
        required: true,
        enum: [
          'libro',
          'pergamino',
          'pluma',
          'varita',
          'caldero',
          'frasco',
          'ingredientes',
          'balanza',
          'mortero',
          'bola de cristal',
          'tarot'
        ]
      }
    ],
    optativa: { type: Boolean, required: true }
  },
  {
    timestamps: true,
    collection: 'subjects'
  }
)

const Subject = mongoose.model('subjects', subjectSchema, 'subjects')
module.exports = Subject
