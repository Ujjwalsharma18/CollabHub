import mongoose from "mongoose"

//Connect to theMongoDB database 

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log('Database connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/GIGConnect`)
}

export default connectDB;