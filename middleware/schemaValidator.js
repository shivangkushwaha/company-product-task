const {sendResponse} = require('../controllers/response')
const multer = require('multer');


// Set storage engine to memory
const storage = multer.memoryStorage();

function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(file.originalname.toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }

// Initialize upload variable
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single('file');

module.exports = {
    bodyValidator:(validator)=> {
   return async function(req, res, next) {
        try {
            const validated = await validator.validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            if(err.isJoi)
                return  sendResponse(res, err.message, {}, 400)
            return  sendResponse(res, err, {}, 500)
        }
    }
},

queryValidator:(validator)=> {
    return async function(req, res, next) {
         try {
             const validated = await validator.validateAsync(req.query)
             req.query = validated
             next()
         } catch (err) {
             if(err.isJoi)
                 return  sendResponse(res, err.message, {}, 400)
             return  sendResponse(res, err, {}, 500)
         }
     }
},
fileValidator : (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return  sendResponse(res, err.message, {}, 400)
      } else if (err) {
        return  sendResponse(res, err.message, {}, 400)
      }
  
      // Check if file is provided
      if (!req.file) {
        return res.status(400).json({ message: 'File is required' });
      }
  
      next();
    });
  }
}
