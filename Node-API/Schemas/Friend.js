const mongoose = require("mongoose");
const Movie = require("./Movie.js");
const FriendSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Recommendations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Movie,
    required: true,
  },
});
module.exports = mongoose.model("Friend", FriendSchema);
