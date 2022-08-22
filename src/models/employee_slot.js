import mongoose from 'mongoose'
const { Schema, Types } = mongoose


export default mongoose.model('EmployeeSlot', new Schema({
    employeeId: {
        type: Types.ObjectId,
        required: true
    },
    venueId: {
        type: Types.ObjectId,
        required: true
    },
    scheduledAt: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['ALLOCATED', 'COMPLETE', 'CANCELLED'],
        default: 'ALLOCATED',
        required: true
    },
    notes: {
        type: String,
        required: false
    }
}))