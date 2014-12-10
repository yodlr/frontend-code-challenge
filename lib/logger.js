var winston = require('winston');
var expressWinston = require('express-winston');

/*
 *  Setup logging for the application
 *  returns a logging instance
 */

var transport = new winston.transports.Console({
  json: false,
  colorize: true
});

var api = module.exports = function init (app) {
  if (app) {
    app.use(expressWinston.errorLogger({
      transports: [
        transport
      ]
    }));

    app.use(expressWinston.logger({
      transports: [
        transport
      ],
      meta: false,
      msg: "HTTP {{req.method}} {{req.url}}",
      expressFormat: true,
      colorStatus: true
    }));
  }

  var logger = new (winston.Logger)({
    transports: [
    transport
    ]
  });
  return logger;
};
