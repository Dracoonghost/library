import bookModel from './schemas/bookSchema';

export const createBook = (author, title, ISBN, releaseDate) => bookModel.findOneAndUpdate(
    { ISBN }, { author, title, releaseDate }, { upsert: true, new: true },
);

export const updateBook = (author, title, ISBN, releaseDate) => bookModel.findOneAndUpdate(
    { ISBN }, { author, title, releaseDate },
);

export const readBook = (ISBN) => bookModel.findOne(
    { ISBN },
);

export const deleteBook = (ISBN) => bookModel.findOneAndRemove(
    { ISBN },
);
