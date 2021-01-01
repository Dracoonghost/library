import * as validator from '../validators/bookValidators';
import * as books from '../models/books';

export const createBook = async (data) => {
    try {
        const isValid = await validator.validateBookCreate(data);
        if (!isValid) {
            return { code: 0, message: 'FAILED_VALIDATION' };
        }
        const {
            ISBN, author, title, releaseDate,
        } = data;
        const result = await books.createBook(author, title, ISBN, releaseDate);
        if (result) {
            return { code: 1, message: 'CREATE_SUCCESS' };
        }
        return { code: 0, message: 'CREATE_FAILED' };
    } catch (error) {
        return { code: 0, message: 'CREATE_FAILED_WITH_EXCEPTION', error };
    }
};

export const updateBook = async (data) => {
    const isValid = await validator.validateBookUpdate(data);
    if (!isValid) {
        return { code: 0, message: 'FAILED_VALIDATION' };
    }
    const {
        ISBN, author, title, releaseDate,
    } = data;
    const result = await books.updateBook(author, title, ISBN, releaseDate);
    if (result) {
        return { code: 1, message: 'UPDATE_SUCCESS' };
    }
    return { code: 0, message: 'UPDATE_FAILED' };
};

export const readBook = async (data) => {
    const isValid = await validator.validateBookRead(data);
    if (!isValid) {
        return { code: 0, message: 'FAILED_VALIDATION' };
    }
    const {
        ISBN,
    } = data;
    console.log(ISBN);
    const result = await books.readBook(ISBN);
    console.log(result);
    if (result) {
        return { code: 1, message: 'READ_SUCCESS', result };
    }
    return { code: 0, message: 'READ_FAILED' };
};

export const deleteBook = async (data) => {
    const isValid = await validator.validateBookDelete(data);
    if (!isValid) {
        return { code: 0, message: 'FAILED_VALIDATION' };
    }
    const {
        ISBN,
    } = data;
    const result = await books.deleteBook(ISBN);
    if (result) {
        return { code: 1, message: 'DELETE_SUCCESS', result };
    }
    return { code: 0, message: 'DELETE_FAILED' };
};
