const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/gr";

let database;
MongoClient
    .connect(
        url,
        {
            useNewUrlParser: true
        })
    .then(db => {
        database = db;
        const grDataBase = db.db('gr');

        return grDataBase
            .collection('yjj')
            .insertOne({
                engName: 'jjy'
            });
    })
    .then(res => {
        database.close();
        console.log('insert ok');
    })
    .catch(err => {
        database.close();
        console.log(err);
    });
