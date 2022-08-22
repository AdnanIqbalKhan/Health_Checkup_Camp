import mongoose from 'mongoose'
const { Schema } = mongoose

export default mongoose.model('CheckupVenue', new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}))