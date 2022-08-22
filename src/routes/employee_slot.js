import { Router } from 'express'
import GenericMiddleware from '../middleware/generic.js'
import Middleware from '../middleware/employee_slot.js'
import Controller from '../controller/employee_slot.js'

const router = Router()

router.route('/')
    .get(Controller.getAll)
    .post(Middleware.create, Controller.create)

router.route('/:id')
    .get(GenericMiddleware.validateId, Controller.get)
    .put(GenericMiddleware.validateId, Middleware.update, Controller.update)
    .delete(GenericMiddleware.validateId, Controller.remove)

router.put('/cancel/:id', GenericMiddleware.validateId, Middleware.cancel, Controller.update)

router.put('/complete/:id', GenericMiddleware.validateId, Middleware.complete, Controller.update)

router.put('/reschedule/:id', GenericMiddleware.validateId, Middleware.reschedule, Controller.update)

export default router