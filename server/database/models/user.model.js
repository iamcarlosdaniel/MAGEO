import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      //trim sirve para quitar los espacios del inicio y el final,  me permite tener una estrada de datos mas limpia
      trim: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Admin", "Standard User"],
      trim: true,
    },
    first_name: {
      type: String,
      require: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      //Ayuda a verificar que el email sea unico
      unique: true,
    },
    //!El admin no puede visualizar la contrasena
    password: {
      type: String,
      require: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    //!El admin no puede visualizar la fecha de nacimiento
    date_of_birth: {
      type: Date,
      required: true,
      trim: true,
    },
    //!El admin no puede visualizar el genero
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
      trim: true,
    },
    campus: {
      type: String,
      enum: [
        "Santa Cruz",
        "La Paz",
        "Cochabamba",
        "Sucre",
        "Trinidad",
        "National",
      ],
      required: true,
      trim: true,
    },
    //TODO: Agregar los departamentos disponibles
    department: {
      type: String,
      enum: ["Departamento_1", "Departamento_2"],
      required: true,
      trim: true,
    },
    position: {
      type: String,
      enum: [
        "Academic",
        "Marketing",
        "Communication",
        "Interaction",
        "Postgraduate",
        "Administrative",
      ],
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
