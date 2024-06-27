const Company = require("../models/company")
const {sendResponse}  = require("../controllers/response")
const logger = require('../logger')
const helper = require('../helper')

module.exports = {

    create: async (req,res) =>{
        try{
            const body = req.body
            if (req.file) {
                const fileBase64 = req.file.buffer.toString('base64');
                console.log('File in Base64 format:', fileBase64);
                body.logo = fileBase64
              }
            body.team = JSON.parse(body.team)
            body.contact = JSON.parse(body.contact)
            const company = new Company(body)
            const responseData = await company.save()
            return sendResponse(res, "Company Created Successfully", responseData, 201);
        } catch(err){
            logger.error(err);
            return sendResponse(res, err.toString())
        }
   
    },

    get: async(req,res)=>{
        try{
            let {page, limit, orderBy, sort, search} = req.query;
            sort = (sort ==='asc') ?  1 : -1;
            let offset = (page - 1) * limit
            const sortObj = {
                [orderBy]: sort
            }
            let where = {}
            if(search!== null){
                where = {$text: {$search: search}}
            }
            const company = await Company.find(where).skip(offset).limit(limit).sort(sortObj)
            const totalRecords = await  Company.find()
            const responseData = {
                data: company,
                totalRecords: totalRecords.length,
                totalPages: Math.ceil(totalRecords.length / limit),
                currentPage: page,
                limit: limit
            }
            return sendResponse(res, "Company Record fatched Successfully", responseData, 200);
        } catch(err){
            logger.error(err.toString());
            return sendResponse(res, err.toString())
        }
    }
}