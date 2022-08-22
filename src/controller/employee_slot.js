import Model from '../models/employee_slot.js'
import Generic from './generic.js'
const typeName = 'Employee Slot'

const getAll = async (req, res) => {
    /*
    #swagger.tags = ['Employee Slot']
    #swagger.description = 'Get All Employee Slot'
    #swagger.operationId = 'get_all_employee_slot'
    */
    Generic.getAll(req, res, typeName, Model)
}

const get = async (req, res) => {
    /*
    #swagger.tags = ['Employee Slot']
    #swagger.description = 'Get Employee Slot'
    #swagger.operationId = 'get_employee_slot'
    #swagger.parameters['id'] = {
        required: true,
        type: "ObjectId"
    }
    */
    Generic.get(req, res, typeName, Model)
}

const create = async (req, res) => {
    /*
     #swagger.tags = ['Employee Slot']
     #swagger.description = 'Create Employee Slot'
     #swagger.operationId = 'create_employee_slot'
     #swagger.requestBody = {
         required: true,
         "@content": {
             "multipart/form-data": {
                 schema: {
                     type: "object",
                     properties: {
                         employeeId: {
                             type: "string"
                         },
                         venueId: {
                             type: "string"
                         },
                         scheduledAt: {
                             type: "Date"
                         },
                         status: {
                             type: "string",
                             enum: ['ALLOCATED', 'COMPLETE', 'CANCELLED'],
                             default: 'ALLOCATED',
                         },
                         notes: {
                             type: "string"
                         },
                     },
                     required: ["employeeId", "venueId","scheduledAt","status"]
                 }
             }
         } 
     }
     */
    Generic.create(req, res, typeName, Model)
}

const update = async (req, res) => {
    /*
    #swagger.tags = ['Employee Slot']
    #swagger.description = 'Update Employee Slot'
    #swagger.operationId = 'update_employee_slot'
    #swagger.parameters['id'] = {
        required: true,
        type: "ObjectId"
    }
    #swagger.requestBody = {
        required: true,
        "@content": {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        employeeId: {
                            type: "string"
                        },
                        venueId: {
                            type: "string"
                        },
                        scheduledAt: {
                            type: "Date"
                        },
                        status: {
                            type: "string",
                            enum: ['ALLOCATED', 'COMPLETE', 'CANCELLED'],
                            default: 'ALLOCATED',
                        },
                        notes: {
                            type: "string"
                        },
                    },
                }
            }
        } 
    }
    */
    Generic.update(req, res, typeName, Model)
}

const remove = async (req, res) => {
    /*
    #swagger.tags = ['Employee Slot']
    #swagger.description = 'Remove Employee Slot'
    #swagger.operationId = 'remove_employee_slot'
    #swagger.parameters['id'] = {
        required: true,
        type: "ObjectId"
    }
    */
    Generic.remove(req, res, typeName, Model)
}

export default {
    get, getAll, create, update, remove
}