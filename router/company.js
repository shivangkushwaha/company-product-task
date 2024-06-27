const router = require("express").Router()
const {createSchema, getSchema} = require('../schema/company')
const {queryValidator, bodyValidator, fileValidator} = require('../middleware/schemaValidator')
const {create, get } = require("../controllers/company")

router.post('/',fileValidator,bodyValidator(createSchema), create)
router.get('/',queryValidator(getSchema), get)


module.exports = router