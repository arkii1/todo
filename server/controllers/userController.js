const User = require('../models/User')

exports.getUser = async function (req, res, next) {
  const { id } = req.params
  const user = await User.findById(id)
  if (!user) {
    const error = new Error(`User with id ${id} not found!`)
    res.status = 404
    return next(error)
  }

  res.setHeader('Content-Type', 'application/json')
  res.json(user)
  res.status = 200
  return next()
}

exports.createUser = function (req, res, next) {
  try {
    const user = new User(req.body)
    user.save()
    res.status = 200
    return next()
  } catch (err) {
    res.status = 404
    return next(err)
  }
}

exports.updateUser = function (req, res, next) {
  const { id } = req.params
  User.updateOne({ _id: id }, req.body, (err) => {
    if (err) {
      const error = new Error(err)
      res.status = 404
      return next(error)
    }

    res.status = 200
    return next()
  })
}

exports.deleteUser = function (req, res, next) {
  const { id } = req.params
  User.findById({ _id: id }, (err) => {
    if (err) {
      const error = new Error(err)
      res.status = 404
      return next(error)
    }

    res.status = 200
    return next()
  })
}
