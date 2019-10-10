var express = require("express");
var router = express.Router();
var beer = require("../models/brews.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    beer.all(function (brewData) {
        res.render("index", { brew_data: brewData });
    });
});

router.post("/api/brews", function (req, res) {
    beer.create([
        "beer_name", "quaffed"
    ], [
        req.body.beer_name, req.body.quaffed
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/brews/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    beer.update({
        quaffed: req.body.quaffed
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/brews/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    beer.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;

