const express = require('express')
const router = express.Router()
const {getRecipe, getRecipeById, postRecipe, putRecipe, delRecipe, getByRecipeId} = require('./../controllers/recipe')
const {protect} = require('../middleware/routeProtector')
const upload = require('../middleware/uploadFile')

router.get('/', getRecipe)
router.get('/myrecipe', protect, getRecipeById)
router.post('/', protect, upload.single('image'), postRecipe)
router.put('/:id', protect, upload.single('image'), putRecipe)
router.delete('/:id', protect, delRecipe)
router.get('/:id', getByRecipeId)

module.exports = router