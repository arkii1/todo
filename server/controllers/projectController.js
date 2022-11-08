const Project = require('../models/Project')

exports.getProject = async function (req, res, next) {
  const { id } = req.params
  const project = await Project.findById(id)
  if (!project) {
    const error = new Error(`Project with id ${id} not found!`)
    res.status = 404
    return next(error)
  }

  res.setHeader('Content-Type', 'application/json')
  res.json(project)
  res.status = 200
  return next()
}

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
