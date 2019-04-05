var orm = require("../config/orm.js");

var burger = {
    all: function(callback){
        
        orm.selectAll(function (res){
            callback(res)
        });
    },
    create: function(){},
    update: function(){},
}

module.exports = burger;