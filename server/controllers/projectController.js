const Project = require('../models/Project')

exports.createProject = function (req, res, next) {
  try {
    const project = new Project(req.body)
    project.save()
    res.status = 200
    return next()
  } catch (err) {
    res.status = 404
    return next(err)
  }
}

exports.updateProject = function (req, res, next) {
  const { id } = req.params
  Project.updateOne({ _id: id }, req.body, (err) => {
    if (err) {
      const error = new Error(err)
      res.status = 404
      return next(error)
    }

    res.status = 200
    return next()
  })
}

exports.deleteProject = function (req, res, next) {
  const { id } = req.params
  Project.findById({ _id: id }, (err) => {
    if (err) {
      const error = new Error(err)
      res.status = 404
      return next(error)
    }

    res.status = 200
    return next()
  })
}

exports.getAllProjects = async function (req, res, next) {
  try {
    const projects = await Project.find()
    res.json(projects)
    res.status = 200
    return next()
  } catch (err) {
    res.status = 404
    return next(err)
  }
}
