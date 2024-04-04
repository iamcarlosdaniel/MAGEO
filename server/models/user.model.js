import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        //trim sirve para quitar los espacios del inicio y el final,  me permite tener una estrada de datos mas limpia
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        //Ayuda a verificar que el email sea unico
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)