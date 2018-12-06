module.exports = function(app, db, mongoose) {
    var summaryModel = require('./models/summary.model.js')(db, mongoose);

    var summaryService = require('./services/summary.service.server')(app, summaryModel);
};