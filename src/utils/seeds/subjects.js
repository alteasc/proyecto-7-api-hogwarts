const mongoose = require('mongoose')
const Subject = require('../../api/models/subject')
const subjects = require('../../data/subjects')

mongoose
  .connect(
    'mongodb+srv://hogwartsprojectasc:EjynaJnWqn2Sai3i@cluster0.ttoh2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const allSubjects = await Subject.find()
    if (allSubjects.length) {
      await Subject.collection.drop()
    }
    console.log('Asignaturas previas eliminadas')
  })
  .catch((error) => console.log(`Error borrando los datos: ${error}`))
  .then(async () => {
    await Subject.insertMany(subjects)
    console.log('Asignaturas añadidas desde data')
  })
  .catch((error) => console.log(`Error creando los datos: ${error}`))
  .finally(() => mongoose.disconnect())
