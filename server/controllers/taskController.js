const Task = require('../models/Task')

exports.getTask = async function (req, res, next) {
  const { id } = req.params
  const task = await Task.findById(id)
  if (!task) {
    const error = new Error(`Task with id ${id} not found!`)
    res.status = 404
    return next(error)
  }

  res.setHeader('Content-Type', 'application/json')
  res.json(task)
  res.status = 200
  return next()
}

exports.createTask = function (req, res, next) {
  try {
    const task = new Task(req.body)
    task.save()
    res.status = 200
    return next()
  } catch (err) {
    res.status = 404
    return next(err)
  }
}

exports.updateTask = function (req, res, next) {
  const { id } = req.params
  Task.updateOne({ _id: id }, req.body, (err) => {
    if (err) {
      const error = new Error(err)
      res.status = 404
      return next(error)
    }

    res.status = 200
    return next()
  })
}

exports.deleteTask = function (req, res, next) {
  const { id } = req.params
  Task.findById({ _id: id }, (err) => {
    if (err) {
      const error = new Error(err)
      res.status = 404
      return next(error)
    }

    res.status = 200
    return next()
  })
}
