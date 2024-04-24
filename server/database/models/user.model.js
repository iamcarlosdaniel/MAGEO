import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        //trim sirve para quitar los espacios del inicio y el final,  me permite tener una estrada de datos mas limpia
        trim: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
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
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    date_of_birth: {
        type: Date,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    campus: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)