import { Router } from 'express'
import GenericMiddleware from '../middleware/generic.js'
import Middleware from '../middleware/employee.js'
import Controller from '../controller/employee.js'

const router = Router()

router.route('/')
    .get(Controller.getAll)
    .post(Middleware.create, Controller.create)

router.route('/:id')
    .get(GenericMiddleware.validateId, Controller.get)
    .put(GenericMiddleware.validateId, Middleware.update, Controller.update)
    .delete(GenericMiddleware.validateId, Controller.remove)

export default router