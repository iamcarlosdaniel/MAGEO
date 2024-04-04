import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:cQUP4lmbPtGu4ssm@university.wtxtr7m.mongodb.net/mern");
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error)
    }
};