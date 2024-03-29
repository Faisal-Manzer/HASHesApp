import mongoose from 'mongoose';


const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) return handler(req, res);
    console.log('Creating new connection to DB...');

    await mongoose.connect(process.env.DATABASE_URL, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true
    });
    return handler(req, res);
};

export default connectDB;
