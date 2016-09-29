var express = require('express');

var artTmlRouter = express.Router();

artTmlRouter.all('/arttemplate', function(req, res, next) {
    var data = {
        title: '姓名名单-arttemplate',
        nameList: [{
            id: '1',
            name: "lee"
        }, {
            id: '2',
            name: 'zhang'
        }, {
            id: '3',
            name: 'chu'
        }]
    };

    res.render('arttemplate', data);
});

module.exports = artTmlRouter;