const exp = require('constants');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use('/css',express.static(__dirname + '/public/css'));
//app.use(bodyParser.json());
const jsonParser = bodyParser.json();
const urlencodeParser = bodyParser.urlencoded({extended:false});

app.use('/',(req,res,next)=>{
    console.log('The request:' + req.url)
    res.cookie('cookiename','cookievalue')
    next();
});

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
                <h1>Hello!!</h1>
            </body>
        </html>    
    `)
});

app.get('/api/:user/:id',(req,res)=>{
    let id = req.params.id;
    let username = req.params.user;
    res.send(`
        <html>
            <body>
                <h1>The user id is: ${id} and the user is ${username}</h1>
            </body>
        </html>    
    `)
});

app.get('/user',(req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/views/user.html`);
    res.send(`${HTML}`);
})

app.post('/api/adduser',jsonParser,(req,res)=>{
    console.log(req.body);
    res.sendStatus(200);
})

app.get('/querystring',(req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/views/querystring.html`);
    res.send(`${HTML}`);
})

app.post('/api/queryadd',urlencodeParser,(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log(firstname + ' ' + lastname)
    res.sendStatus(200);
})

app.get('/api/car',(req,res)=>{
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
});

const port = process.env.PORT || 3000
app.listen(port);