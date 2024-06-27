module.exports = {
    
    calculateOffset:(page,limit)=>{
        return limit * (page - 1)
    },

    calculatePage:(limit, offset)=>{
        return Math.ceil(offset / limit)
    }

}