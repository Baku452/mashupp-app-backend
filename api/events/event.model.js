const mongoose = require('mongoose')
const artistSchema =  new mongoose.Schema({ id: String, genre: String, imageURL: String});

const EventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        artistID: {
            type: String
        },
        artistName: {
            type: String
        },
        artistGenre: {
            type:String
        },
        artistPicture: {
            type:String
        },
        attendees: [{
            type: String
        }],
        imageURL: {
            type: String
        }

    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('Event', EventSchema)
