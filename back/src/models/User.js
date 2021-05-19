const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

User.plugin(mongoosePaginate);

module.exports = mongoose.model("User", User);