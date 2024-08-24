const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// const { MongoClient, ServerApiVersion } = require('mongodb');

// username: martonemese34
// password: Pnj6Vm5TIBdsAo5p

const mongoURI = `mongodb+srv://martonemese34:Pnj6Vm5TIBdsAo5p@cluster0.rf6dqjg.mongodb.net/myApp?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(mongoURI);

app.use(bodyParser.json());

const carSchema = mongoose.Schema({
    brand:String,
    model:String,
    year:Number,
    avail:Boolean
})

const Car = mongoose.model('Car',carSchema);

app.post('/api/addcar',async(req,res) => {
    try {
        const addCar = new Car({
            brand:req.body.brand,
            model:req.body.model,
            year:req.body.year,
            avail:req.body.avail
        })
        const newCar = await addCar.save()
        res.sendStatus(200)
    } catch(err) {
        console.log(err)
    }
});

app.get('/api/getcars',async(req,res) => {
    try{
        let doc = await Car.find({});
        // let doc = await Car.find({brand:'Ford'});
        // let doc = await Car.findOne({_id:'66902ea7bb15bc6d0e9e0b6b'});
        // let doc = await Car.findById('66902ea7bb15bc6d0e9e0b6b');
        res.json(doc);
    } catch(err) {
        console.log(err)
    }
})

app.post('/api/removecar',async(req,res) => {
    try {
        const brand = req.body.brand;
        let doc = await Car.deleteMany({});
        res.json(doc);
    } catch(err) {
        console.log(err)
    }
})

app.post('/api/updatecar',async(req,res) => {
    try {
        const id = req.body.id;
        const brand = req.body.brand;
        let doc = await Car.findByIdAndUpdate(
            id,
            {$set:{brand:brand}}
        );
        res.json(doc);
    } catch(err) {
        console.log(err)
    }
})

const port = process.env.PORT || 3001;
app.listen(port);

// const client = new MongoClient(mongoURI,{
//     serverApi:{
//         version:ServerApiVersion.v1,
//         strict:true,
//         deprecationErrors:true
//     }
// });

// // async function run(){
// //     try{
// //         await client.connect();
// //         console.log('connected');
// //     } finally {
// //         await client.close();
// //     }
// // }

// // run().catch(console.dir)

// app.get('/api/users',async (req,res) => {
//     try {
//         await client.connect();
//         const database = client.db('myApp');
//         const collection = database.collection('users');
//         const query = await collection.insertOne({
//             name:'Francis',
//             lastname:'Jones'
//         });
//         console.log(query);
//         res.status(200).json({awesome:'Yes'});
//     } catch(error) {
//         throw error;
//     } finally {
//         await client.close();
//         console.log('all is done');
//     }
// })