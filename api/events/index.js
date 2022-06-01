const { Router } = require('express');
const { removeAttende, retrieveEventByUser,getAllEvents, retrieveEvent, createEvent, updateEvent, deleteEvent, addAttende} = require('./event.controller')
const upload = require('../../services/multer')
const router = Router()
require("../../config/cloudinary.config")

router.get('/', getAllEvents)
router.get('/filter', retrieveEventByUser)
router.get('/:id', retrieveEvent)
router.post('/', upload.single("image"),createEvent)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)
router.put('/:id/attende', addAttende)
router.put('/:id/removeAttende', removeAttende)




module.exports = router
