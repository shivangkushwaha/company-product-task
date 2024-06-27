const Joi = require('joi')
const {DEFAULT_PAGE, MAX_LIMIT, DEFAULT_LIMIT} = require('../appConstant')

const createSchema  = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    contry: Joi.string().required(),
    postalCode: Joi.string().required(),
    city: Joi.string().required(),
    phone: Joi.string().required(),
    phoneCode: Joi.string().required(),
    url: Joi.string().optional().default(null),
    contact: Joi.string().required(),
    profile: Joi.string().required(),
    fbLink: Joi.string().optional().default(null),
    misson: Joi.string().optional().default(null),
    team: Joi.string().optional().default("[]"),
    productName:Joi.string().required(),
    productdescription: Joi.string().required(),
    productUrl: Joi.string().required()
})

const getSchema = Joi.object({
    page: Joi.number().optional().integer().min(1).default(DEFAULT_PAGE),
    limit: Joi.number().optional().integer().min(1).default(DEFAULT_LIMIT).max(MAX_LIMIT),
    orderBy: Joi.string().optional().allow('id','name').default('id'),
    sort: Joi.string().optional().allow('asc','desc').default('asc'),
    search: Joi.string().optional().min(3).default(null).max(10)
})

module.exports = {createSchema, getSchema}