const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  slug: { type: String, required: true },
  profilePic: {
    type: String,
    default:
      'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
  },
  created: { type: Date, required: true },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
})

module.exports = mongoose.model('User', UserSchema)
