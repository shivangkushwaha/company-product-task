module.exports = {
    sendResponse : (res, message = "Internal Server Error.", data = {}, statusCode = 500)=>{
        const success = statusCode <= 210 ? true: false
        return res.status(statusCode).json(
            {   
                success : success,
                data :data,
                message : message
            }
        )
    }

}