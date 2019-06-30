var mongoose = require('mongoose');  
var ItemSchema = new mongoose.Schema({  
  name: String,
  price: String,
  available: Boolean,
  createdAt: {type: Date , default: Date.now()}

});
mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Item');


