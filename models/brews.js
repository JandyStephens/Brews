var orm = require("../config/orm.js");

var beer = {
    all: function (cb) {
        orm.all("beer", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("beer", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("beer", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("beer", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = beer;