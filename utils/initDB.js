/* eslint-disable no-console */
import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const initDB = () => new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_CONNECT_STRING, {
        useNewUrlParser: true, useUnifiedTopology: true,
    });
    mongoose.connection.once('open', () => {
        console.log('connected to DB');
        resolve(true);
    }).on('error', (err) => {
        console.log('err', err);
        reject(err);
    });
});

export default initDB;
