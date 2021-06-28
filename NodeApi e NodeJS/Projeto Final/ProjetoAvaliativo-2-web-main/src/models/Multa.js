const mongoose = require('mongoose')
const MultaSchema = new mongoose.Schema({
    placa:{
        type:String,
        required: true,
    },
    detalhe:{
        type:String,
        required: true,
    },
    url:{
        type:String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }

})

module.exports= mongoose.model('Multa', MultaSchema)