import Model from '../models/checkup_venue.js'
import Generic from './generic.js'
const typeName = 'Checkup Venue'

const getAll = async (req, res) => {
    /*
    #swagger.tags = ['Checkup Venue']
    #swagger.description = 'Get All Checkup Venue'
    #swagger.operationId = 'get_all_checkup_venue'
    */
    Generic.getAll(req, res, typeName, Model)
}

const get = async (req, res) => {
    /*
    #swagger.tags = ['Checkup Venue']
    #swagger.description = 'Get Checkup Venue'
    #swagger.operationId = 'get_checkup_venue'
    #swagger.parameters['id'] = {
        required: true,
        type: "ObjectId"
    }
    */
    Generic.get(req, res, typeName, Model)
}

const create = async (req, res) => {
    /*
        #swagger.tags = ['Checkup Venue']
        #swagger.description = 'Create Checkup Venue'
        #swagger.operationId = 'create_checkup_venue'
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
                            location: {
                                type: "string"
                            }
                        },
                        required: ["name", "location"]
                    }
                }
            } 
        }
        */
    Generic.create(req, res, typeName, Model)
}

const update = async (req, res) => {
    /*
    #swagger.tags = ['Checkup Venue']
    #swagger.description = 'Update Checkup Venue'
    #swagger.operationId = 'update_checkup_venue'
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
                        location: {
                            type: "string"
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
    #swagger.tags = ['Checkup Venue']
    #swagger.description = 'Remove Checkup Venue'
    #swagger.operationId = 'remove_checkup_venue'
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