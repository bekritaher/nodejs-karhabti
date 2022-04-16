const express = require('express')
const router  = express.Router()

const AnnonceController = require('../controllers/AnnonceController')

router.get('/index',AnnonceController.index)
router.post('/show',AnnonceController.show)
router.get('/',AnnonceController.index)
router.post('/stores',AnnonceController.stores)
router.post('/update',AnnonceController.update)
router.post('/delete',AnnonceController.destory)

module.exports=router