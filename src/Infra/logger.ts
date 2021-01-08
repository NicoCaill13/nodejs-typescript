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

const dailyRotateFileTransport = level => new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%/${level}.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    level: level
});


const logger = createLogger({
    level: env === 'dev' ? 'verbose' : 'info',
    format: combine(
        timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console({
            level: env === 'dev' ? 'verbose' : 'info',
            format: combine(
                label({ label: path.basename(require.main.filename) }),
                colorize(),
                printf(
                    info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
                )
            )
        }),
        dailyRotateFileTransport('info'),
        dailyRotateFileTransport('error')
    ]
});

export { logger }