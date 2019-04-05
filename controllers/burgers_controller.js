var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get homepage
router.get("/", function(req, res){
    
    burger.all(function(data){
        let hbsObject = {
            all: data
        };
        console.log("controller: ", hbsObject);
        res.render('index', hbsObject);
    })
    
})

// post burger and redirect to homepage

// update burger then redirect to homepage

module.exports = router;


