const mongoose = require("mongoose");

const Category= new mongoose.Schema(
  {
    img:{type:String},
    title:{type:String},
    cat:{type:String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", Category);