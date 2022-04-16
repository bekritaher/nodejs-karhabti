const express = require('express')
const router  = express.Router()

const UtilisateurController = require('../controllers/UtilisateurController')


/**
 * @swagger
 * /api/utilisateur/index:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/index',UtilisateurController.index)
router.post('/show',UtilisateurController.show)
/**
 * @swagger
 * /api/utilisateur/store:
 *  post:
 *    description: Use to add a user
 *    responses:
 *      '201':
 *        description: A successful response
 */
router.post('/store',UtilisateurController.store)
router.post('/store',UtilisateurController.store)
/**
 * @swagger
 * /api/utilisateur/update:
 *  put:
 *    description: Use to update a user
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/update',UtilisateurController.update)
/**
 * @swagger
 * /api/utilisateur/delete:
 *  delete:
 *    description: Use to delete a user
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/delete',UtilisateurController.destory)

module.exports=router