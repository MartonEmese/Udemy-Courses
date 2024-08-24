const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

const mongoURI = `mongodb+srv://martonemese34:Pnj6Vm5TIBdsAo5p@cluster0.rf6dqjg.mongodb.net/myApp?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(cookieParser());

const { User } = require('./models/user');

app.post('/api/user',async(req,res) => {
    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });
        let doc = await user.save();
        res.status(200).send(doc);
    } catch(err) {
        res.status(400).send(err);
    }
})

app.post('/api/user/login',async(req,res) => {
    try {
        let user = await User.findOne({'email': req.body.email});
        if(!user) throw 'User not found';
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(err) throw 'Bad password';
            if(!isMatch) return res.status(400).json({
                message:'Bad password'
            });
            user.generateToken((err,user) => {
                if(err) throw err;
                res.cookie('auth',user.token).send('ok');
            })
        });
    } catch(err) {
        res.json({message:err});
    }
})

app.get('/api/books',async(req,res)=>{
    let token = req.cookies.auth;
    User.findByToken(token,(err,user) => {
        if(err) throw err;
        if(!user) return res.status(400).json({
            message:'Bad token'
        });
        res.status(200).send(user);
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Started on port ${port}`);
})