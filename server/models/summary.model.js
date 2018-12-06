var q = require("q");

module.exports = function(db, mongoose) {

    var summarySchema = require('./summary.schema.server.js')(mongoose);
    var SummaryModel = mongoose.model('summaries', summarySchema);

    var api = {
        getAllSummaries : getAllSummaries,
        createSummary   : createSummary,
        deleteSummary   : deleteSummary
    };

    return api;

    function getAllSummaries() {
        var deferred = q.defer();

        SummaryModel.find({}, function(err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });

        return deferred.promise;
    }

    function createSummary(summary) {
        var deferred = q.defer();

        SummaryModel.create(summary, function(err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function deleteSummary(summaryId) {
        var deferred = q.defer();

        SummaryModel.remove({_id: summaryId}, function (err, doc) {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }
};