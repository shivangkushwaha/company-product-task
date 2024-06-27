const mongoose = require("mongoose")
const CompanySchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        contry: {type: String, required: true},
        postalCode: {type: String, required: true},
        city: {type: String, required: true},
        phone: {type: String, required: true},
        phoneCode: {type: String, required: true},
        url: {type: String, required: false},
        contact: {type: Object, required: true },
        logo: {type: String, required: true},
        profile: { type: String, required: true },
        fbLink: { type: String, required: false },
        misson:  { type: String, required: false },
        team: {type: Object, required: false },
        productName: { type: String, required: true },
        productdescription: { type: String, required: true },
        productUrl: { type: String, required: false }
    }
)
CompanySchema.index({name: 'name_index', 'name': 'text'});
CompanySchema.index({name: 'contry_index', 'contry': 'text'});
CompanySchema.index({name: 'productName_index', 'productName': 'text'});

module.exports = mongoose.model('Company', CompanySchema)