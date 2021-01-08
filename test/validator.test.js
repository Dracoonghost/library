/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import * as validator from '../validators/bookValidators';
import * as operations from '../services/bookOperations';

dotenv.config();

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const initDB = () => new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_CONNECT_STRING, {
        useNewUrlParser: true, useUnifiedTopology: true,
    });
    mongoose.connection.once('open', () => {
        resolve(true);
    }).on('error', (err) => {
        reject(false);
    });
});

const assert = require('assert');

describe('Tetsing connection to the DB', () => {
    it('Should connect to the DB', async () => {
        await initDB().then((d) => {
            assert.strictEqual(d, true);
        }).catch((e) => {
            done();
        });
        // done();
        // assert.strictEqual(r, true);
    });
});

describe('Validating Book Creation with invalid inputs; ISBN', () => {
    it('should throw validation error', async () => {
        const body = { ISBN: 'Wrong ISBN', author: 'Some Author', title: 'title of the book' };
        const result = await validator.validateBookCreate(body);
        assert.strictEqual(result, false);
    });
});

describe('Validating Book Creation with invalid inputs; author', () => {
    it('should throw validation error', async () => {
        const body = { ISBN: '99921-58-10-7', author: 'test', title: 'title of the book' };
        const result = await validator.validateBookCreate(body);
        assert.strictEqual(result, false);
    });
});

describe('Validating Book Creation with invalid inputs; title', () => {
    it('should throw validation error', async () => {
        const body = { ISBN: '99921-58-10-7', author: 'Some Author', title: 'tst' };
        const result = await validator.validateBookCreate(body);
        assert.strictEqual(result, false);
    });
});

describe('Validating Book Creation with Valid inputs', () => {
    it('should throw validation error', async () => {
        const body = { ISBN: '99921-58-10-7', author: 'Some Author', title: 'Title of the book' };
        const result = await validator.validateBookCreate(body);
        assert.strictEqual(result, true);
    });
});

before(async () => {
    mongoose.connect(process.env.MONGO_CONNECT_STRING, {
        useNewUrlParser: true, useUnifiedTopology: true,
    }).then(() => {
        done();
    }).catch((err) => {
        done(err);
    });
});

after(async () => {
    mongoose.connection.close();
    // done();
});

describe('Book Creation with Valid inputs', () => {
    it('should throw validation error', async () => {
        const body = { ISBN: '99921-58-10-7', author: 'Some Author', title: 'Title of the book' };
        const result = await operations.createBook(body);
        assert.strictEqual(result.code, 1);
    });
});
