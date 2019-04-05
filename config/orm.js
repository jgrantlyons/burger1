var connection = require("./connection.js");

var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log("orm result: ", result);
            // return result;

            callback(result);

        })

    },
    insertOne: function () { },
    updateOne: function () { }
}

// var orm = {
//     selectAll: function (tableName, callback) {
//         let queryString = "SELECT * FROM ??";
//         console.log(queryString);
//         connection.query(queryString, [tableName], function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             callback(result);
//             console.log(result);

//         });
//     },

module.exports = orm;