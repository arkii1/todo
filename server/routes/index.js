const express = require('express')

const router = express.Router()

const teamController = require('../controllers/teamController')
const projectController = require('../controllers/projectController')
const userController = require('../controllers/userController')
const taskController = require('../controllers/taskController')

router.post('/team/create', teamController.createTeam)
router.get('/team/get/:id', teamController.getTeam)
router.post('/team/update/:id', teamController.updateTeam)
router.get('/team/delete/:id', teamController.deleteTeam)

router.post('/project/create', projectController.createProject)
router.get('/project/update/:id', projectController.updateProject)
router.get('/project/delete/:id', projectController.deleteProject)
router.get('/prject/all', projectController.getAllProjects)

router.post('/user/create', userController.createUser)
router.get('/user/get/:id', userController.getUser)
router.get('/user/update/:id', userController.updateUser)
router.get('/user/delete/:id', userController.deleteUser)

router.post('/task/create', taskController.createTask)
router.get('/task/get/:id', taskController.getTask)
router.get('/task/update/:id', taskController.updateTask)
router.get('/task/delete/:id', taskController.deleteTask)

module.exports = router
