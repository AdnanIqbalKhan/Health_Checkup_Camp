import Model from '../models/employee.js'
import Generic from './generic.js'
const typeName = 'Employee'

const getAll = async (req, res) => {
    /*
    #swagger.tags = ['Employee']
    #swagger.description = 'Get All Employee'
    #swagger.operationId = 'get_all_employee'
    */
    Generic.getAll(req, res, typeName, Model)
}

const get = async (req, res) => {
    /*
    #swagger.tags = ['Employee']
    #swagger.description = 'Get Employee'
    #swagger.operationId = 'get_employee'
    #swagger.parameters['id'] = {
        required: true,
        type: "ObjectId"
    }
    */
    Generic.get(req, res, typeName, Model)
}

const create = async (req, res) => {
    /*
    #swagger.tags = ['Employee']
    #swagger.description = 'Create Employee'
    #swagger.operationId = 'create_employee'
    #swagger.requestBody = {
        required: true,
        "@content": {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        age: {
                            type: "number"
                        }
                    },
                    required: ["name", "age"]
                }
            }
        } 
    }
    */
    Generic.create(req, res, typeName, Model)
}

const update = async (req, res) => {
    /*
    #swagger.tags = ['Employee']
    #swagger.description = 'Update Employee'
    #swagger.operationId = 'update_employee'
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
                        name: {
                            type: "string"
                        },
                        age: {
                            type: "number"
                        }
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
    #swagger.tags = ['Employee']
    #swagger.description = 'Remove Employee'
    #swagger.operationId = 'remove_employee'
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