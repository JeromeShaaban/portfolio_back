const express = require("express")
const cors = require("cors")

const app = express()
const ProjectsRouter = require("./routes/projects.js")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Configure cors
app.use(cors())

// Add your routes here
app.use("/api/projects", ProjectsRouter)

module.exports = app
