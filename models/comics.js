var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comicSchema = Schema({
  nombre: String,
  imagen: String,
  poderes: String
});

module.exports = mongoose.model("Comic",  comicSchema);
