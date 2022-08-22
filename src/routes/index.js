import { Router } from 'express'
import employeeRoutes from './employee.js'
import employeeSlotRoutes from './employee_slot.js'
import checkupVenueRoutes from './checkup_venue.js'

const router = Router()
router.get('/', (req, res, next) => {

  res.send('Hello')
})

router.use('/employee', employeeRoutes)
router.use('/slot', employeeSlotRoutes)
router.use('/venue', checkupVenueRoutes)

export default router