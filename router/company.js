const router = require("express").Router()
const {createSchema, getSchema} = require('../schema/company')
const {queryValidator, bodyValidator, fileValidator} = require('../middleware/schemaValidator')
const {create, get } = require("../controllers/company")

router.post('/company',fileValidator,bodyValidator(createSchema), create)
router.get('/company',queryValidator(getSchema), get)


module.exports = router