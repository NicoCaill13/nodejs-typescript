const logDir = 'log';
const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'dev';
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, label } = format;
require('winston-daily-rotate-file');

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const dailyRotateFileTransportInfo = new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%/access.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    level: 'info'
});
const dailyRotateFileTransportError = new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%/error.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    level: 'error'
});

const logger = createLogger({
    level: env === 'dev' ? 'verbose' : 'info',
    format: combine(
        timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    // You can also comment out the line above and uncomment the line below for JSON format
    // format: format.json(),
    transports: [
        new transports.Console({
            level: env === 'dev' ? 'verbose' : 'info',
            format: combine(
                label({ label: path.basename(process.mainModule.filename) }),
                colorize(),
                printf(
                    info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
                )
            )
        }),
        dailyRotateFileTransportError,
        dailyRotateFileTransportInfo
    ]
});

export { logger }