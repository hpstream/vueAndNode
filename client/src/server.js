
var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');
app.use(cors());

router.post('/login', function (req, res) {
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

router.get('/user/list', function (req, res) {
    res.send({
        code: 20000,
        data: [{
            id:1,
            name:'123',
            address:"中华人名共和国"
        },{
            id:2,
            name:'123',
            address:"中华人名共和国"
        }]
    });
});
app.use('/',router);
app.listen(3000);
console.log('3000 端口正在被使用');