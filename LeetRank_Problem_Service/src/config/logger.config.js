// transport file :- winston
const winston = require('winston');
// const path = require('path'); // for file system
const { LOG_DB_URL } = require('./server.config');
const { collection } = require('../models/problem.model');
require('winston-mongodb');


const allowedTransports = [];

// The below transport congiguration logging on the console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));



// The below transport congiguration logging on the MongoDB


allowedTransports.push(new winston.transports.MongoDB({
    level: 'error', // push only the error level bcz when we do everything in DB then in any case the db will full then we have to pay extra for extra storage.
    db: LOG_DB_URL, // connecting string in .env file
    collection :'logs',
    
}))

// The below transport congiguration logging on the files
allowedTransports.push(new winston.transports.File({
    filename:`app.log`   //`${__dirname}/logs/app.log` // __dirname is a nodejs global
}))

//default formatting
const logger = winston.createLogger({
    // first argument to the combine method is defining how we want the timesamp to comeup
    format: winston.format.combine(
        // winston.format.colorize(),
        // winston.format.errors({stack: true}),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        //second agument with combined method which defines what is exactly printed in log
        winston.format.printf((log)=> `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)

    ), // format of log
    transports: allowedTransports

});

module.exports = logger;