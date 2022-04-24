const express = require('express');
const app = express();
const port = 4000;



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://notesTaker:ffpnNeCwLAvsN1zz@cluster0.vxfhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//   client.close();
console.log('connected db')
});


app.get('/', (req, res)=>{


    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



    //notesTaker
    //ffpnNeCwLAvsN1zz