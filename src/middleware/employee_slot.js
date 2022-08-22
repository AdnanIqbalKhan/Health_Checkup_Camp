import { Types, validateRequiredFields, validateFields } from './generic.js'

const typeName = 'Employee Slot'

const rules = [
    {
        key: 'employeeId',
        required: true,
        type: Types.ObjectId
    },
    {
        key: 'venueId',
        required: true,
        type: Types.ObjectId
    },
    {
        key: 'scheduledAt',
        required: true,
        type: Types.Date
    },
    {
        key: 'status',
        required: false,
        type: Types.Enum,
        enum: ['ALLOCATED', 'COMPLETE', 'CANCELLED']
    },
    {
        key: 'notes',
        required: false,
        type: Types.String
    }
]

const create = (req, res, next) => {
    const errors = validateRequiredFields(rules, req.body, typeName)
    if (errors.length == 0) {
        next()
    } else {
        res.status(404).send({ 'message': 'Insufficient request data', error: errors })
    }
}

const update = (req, res, next) => {
    const errors = validateFields(rules, req.body, typeName)
    if (errors.length == 0) {
        next()
    } else {
        res.status(404).send({ 'message': 'Insufficient request data', error: errors })
    }
}

const cancel = (req, res, next) => {
    req.body.status = 'CANCELLED'
    next()
}

const complete = (req, res, next) => {
    req.body.status = 'COMPLETE'
    next()
}


const reschedule = (req, res, next) => {
    const rule = [{
        key: 'scheduledAt',
        required: true,
        type: Types.Date
    }]
    const errors = validateRequiredFields(rule, req.body, typeName)
    if (errors.length == 0) {
        next()
    } else {
        res.status(404).send({ 'message': 'Insufficient request data', error: errors })
    }
}

export default {
    create, update, cancel, complete, reschedule
}