import validator from 'validator';

export const validateBookCreate = (body) => {
    const { ISBN, author, title } = body;
    if (ISBN && author && title
        && validator.isISBN(ISBN)
        && validator.isLength(author, { max: 30, min: 5 })
        && validator.isLength(title, { max: 30, min: 5 })) {
        return true;
    }
    return false;
};

export const validateBookUpdate = (body) => {
    const { ISBN, author, title } = body;
    if (ISBN && author && title
        && validator.isISBN(ISBN)
        && validator.isLength(author, { max: 30, min: 5 })
        && validator.isLength(title, { max: 30, min: 5 })) {
        return true;
    }
    return false;
};

export const validateBookRead = (body) => {
    const { ISBN } = body;
    if (ISBN && validator.isISBN(ISBN)) {
        return true;
    }
    return false;
};

export const validateBookDelete = (body) => {
    const { ISBN } = body;
    if (ISBN && validator.isISBN(ISBN)) {
        return true;
    }
    return false;
};
