var express = require('express');
var router = express.Router();
var loginModel = require('../model/login.js');
const url = '/login';

router.get('/user/list',function(req,res){

    loginModel.login(function(data){
        res.send({
            code: 20000,
            data:data
        });
    })

});
router.post(url, function (req, res) {
    res.send({
        code: 20000,
        data: {
            token: 'admin'
        }
    });
});
router.get('/user/info', function (req, res) {
    res.send({
        code: 20000,
        data: {
            token: 'admin',
            roles:['roles']
        }
    });
});
module.exports = router;