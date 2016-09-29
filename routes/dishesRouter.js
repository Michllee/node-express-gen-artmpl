var express = require('express');
var dishesRouter = express.Router();

module.exports = dishesRouter;

dishesRouter.all(function(req, res, next){
    res.write(200,{'Content-Type':'text/plain'});
    next();
})
.get('/',function(req, res, next) {
    res.end('Will send all dishes to you!');
})
.delete('/', function(req, res, next) {
    res.end('Delete all dishes');
})
.post('/',function(req,res,next){
    res.end('disheName:' + req.body.disheName + ' some description:' + req.body.description);
})
.get('/:disheId', function (req, res, next) {
    res.end("Will send dishe " + req.params.disheId + ' to you!')
})
.put('/:disheId', function (req, res, next) {
    res.write('Will update dishe: '+ req.params.disheId + '\n');
    res.end('Will update the dishes: ' + req.body.name + ' with the detail: ' + req.body.decription );
})
.delete('/:disheId',function(req,res,next){
    res.end('Willd delete the dishe: '+ req.params.disheId);
});
