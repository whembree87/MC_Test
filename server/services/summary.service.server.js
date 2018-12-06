module.exports = function(app, summaryModel) {
    app.get    ("/api/summaries/all", getAllSummaries);

    app.post   ("/api/summaries/new", createNewSummary);

    app.delete ("/api/summaries/delete/:summaryId", deleteSummary);



    function getAllSummaries(req, res) {
        summaryModel
            .getAllSummaries()
            .then(
            function (summaries) {
                res.json(summaries);
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    }

    function createNewSummary(req, res) {
        var summary = {
            url : req.body.url,
            summary : req.body.summary
        };

        summaryModel
        .createSummary(summary)
        .then(
            function (summary) {
                res.json(summary);
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    }

    function deleteSummary(req, res) {
        var summaryId = req.params.summaryId;

        summaryModel
            .deleteSummary(summaryId)
            .then(
            function(summaries){
                res.json(summaries);
            },
            function(err){
                res.status(400).send(err);
            }
        );
    }
};