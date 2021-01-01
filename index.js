/* eslint-disable operator-assignment */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import dotenv from 'dotenv';
import initDB from './utils/initDB';
import * as route from './routes/book';

dotenv.config();

const http = require('http');

const requestHandler = (request, response) => {
    response.setHeader('content-Type', 'Application/json');
    if (request.url === '/book') {
        let body = '';
        let postData = {};
        request.on('data', (chunk) => {
            body = body + chunk;
        });
        request.on('end', () => {
            postData = body ? JSON.parse(body) : {};
            const { method } = request;
            route[method](response, postData);
        });
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({ code: 0, message: 'NO_MATCHING_URL' }));
    }
};

const server = http.createServer(requestHandler);

const startApp = async () => {
    await initDB();
    server.listen(process.env.PORT, (err) => {
        if (err) {
            return console.log('something bad happened', err);
        }
        console.log(`server is listening on ${process.env.PORT}`);
    });

    server.on('error', (err) => {
        console.log(err);
    });
};

startApp();
