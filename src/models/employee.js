import mongoose from 'mongoose'
const { Schema } = mongoose

export default mongoose.model('Employee', new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    }
}))