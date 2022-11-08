const Team = require('../models/Team')

exports.getTeam = async function (req, res, next) {
  const { id } = req.params
  const team = await Team.findById(id)
  if (!team) {
    const error = new Error(`Team with id ${id} not found!`)
    res.status = 404
    return next(error)
  }

  res.setHeader('Content-Type', 'application/json')
  res.json(team)
  res.status = 200
  return next()
}

exports.createTeam = function (req, res, next) {
  try {
    const team = new Team(req.body)
    team.save()
    res.status = 200
    return next()
  } catch (err) {
    res.status = 404
    return next(err)
  }
}

exports.updateTeam = async function (req, res, next) {
  const { id } = req.params
  Team.updateOne({ _id: id }, req.body, (err) => {
    if (err) {
      const error = new Error(err)
      res.status = 404
      return next(error)
    }

    res.status = 200
    return next()
  })
}

exports.deleteTeam = function (req, res, next) {
  const { id } = req.params
  Team.findById({ _id: id }, (err) => {
    if (err) {
      const error = new Error(err)
      res.status = 404
      return next(error)
    }

    res.status = 200
    return next()
  })
}
