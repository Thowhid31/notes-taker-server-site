const express = require('express');
const { get } = require('express/lib/response');
const app = express();
const port = 4000;
const cors = require('cors')

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://notesTaker:ffpnNeCwLAvsN1zz@cluster0.vxfhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{
        await client.connect();
        const collection = client.db("noteTaker").collection("note")
        console.log('connected to db');

        //get api to read all notes
        app.get('/notes', async(req, res)=>{
            const q = req.query;
            console.log(q);

            const cursor = notesCollection.find({});
            const result = await cursor.toArray();


            res.send(result)
        });


        //create notesTaker
        app.post('/note', (req, res)=>{
            const data = req.body
            console.log(data);
            res.send('Hello post api');
        })


        //update notesTaker


        //delete note
    }
    finally{

    }
}

run().catch(console.dir);

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
// //   client.close();
// console.log('connected db')
// });


app.get('/', (req, res)=>{


    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



    //notesTaker
    //ffpnNeCwLAvsN1zz