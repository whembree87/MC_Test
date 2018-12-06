module.exports = function (mongoose) {

    var SummarySchema = mongoose.Schema({
        url : String,
        summary : String
    }, {collection: 'summaries'});

    return SummarySchema;
};