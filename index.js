require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const subjectRoutes = require('./src/api/routes/subject')
const usersRoutes = require('./src/api/routes/users')
const teacherRoutes = require('./src/api/routes/teachers')
const scoreRoutes = require('./src/api/routes/scores')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/subjects', subjectRoutes)
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/teachers', teacherRoutes)
app.use('/api/v1/scores', scoreRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor operativo en: http://localhost:3000')
})
