const mongoose = require('mongoose');

const URI = process.env.DATABASE_CONNECTION_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.error('database connected')
    } catch (err) {
        console.error('database connection failed')
        process.exit(0);
    }
}

module.exports = connectDB