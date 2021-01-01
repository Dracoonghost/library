import * as books from '../services/bookOperations';

const POST = async (res, data) => {
    const result = await books.createBook(data);
    if (result.code === 1) {
        res.statusCode = 202;
        res.end(JSON.stringify(result));
    } else {
        res.statusCode = 500;
        res.end(JSON.stringify(result));
    }
};

const PUT = async (res, data) => {
    const result = await books.updateBook(data);
    if (result.code === 1) {
        res.statusCode = 202;
        res.end(JSON.stringify(result));
    } else {
        res.statusCode = 500;
        res.end(JSON.stringify(result));
    }
};

const GET = async (res, data) => {
    const result = await books.readBook(data);
    if (result.code === 1) {
        res.statusCode = 202;
        res.end(JSON.stringify(result));
    } else {
        res.statusCode = 500;
        res.end(JSON.stringify(result));
    }
};

const DELETE = async (res, data) => {
    const result = await books.deleteBook(data);
    if (result.code === 1) {
        res.statusCode = 202;
        res.end(JSON.stringify(result));
    } else {
        res.statusCode = 500;
        res.end(JSON.stringify(result));
    }
};

module.exports = {
    POST,
    PUT,
    DELETE,
    GET,
};
