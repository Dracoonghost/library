import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
        index: true,
    },
    releaseDate: {
        type: Date,
    },
}, {
    collection: 'books',
    versionKey: false,
});

const bookModel = mongoose.model('chatMessage', bookSchema);
export default bookModel;
