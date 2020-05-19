var uniqueValidator = require("mongoose-unique-validator");
var mongoose = require('mongoose');
Schema = mongoose.Schema;

var validRoles = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no es un rol válido",
};

UserSchema = new Schema({
  name: { type: String, required: [true, "El nombre es requerido"] },
  phone: { type: Number },
  emergencyPhone: { type: Number },
  address: { type: String },
  email: {
    type: String,
    unique: true,
    required: [true, "El correo es requerido"],
  },
  password: { type: String, required: [true, "La contraseña es requerida"] },
  role: {
    type: String,
    required: true,
    default: "USER_ROLE",
    enum: validRoles,
  },
});
UserSchema.plugin(uniqueValidator, {
  message: "{PATH} El email debe ser unico",
});

module.exports = mongoose.model("User", UserSchema);
