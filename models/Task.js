const mongoose = require('mongoose')

const { Schema } = mongoose

const TaskSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String },
  priority: {
    type: String,
    enum: ['Low, Medium, High, Critical'],
    required: true,
  },
  created: { type: Date, required: true },
  due: { type: Date, required: true },
  assignedUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
})

module.exports = mongoose.model('Task', TaskSchema)
