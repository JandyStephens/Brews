var orm = require("../config/orm.js");

var beers = {
    all: function (cb) {
        orm.all("beers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("beers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("beers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("beers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = beers;