const mongoose = require('mongoose')

const { Schema } = mongoose

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String },
  image: {
    type: String,
    default:
      'https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000',
  },
  created: { type: Date, required: true },
  createdUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model('Project', ProjectSchema)
