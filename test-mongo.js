const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/gr";

MongoClient.connect(
    url,
    {
        useNewUrlParser: true
    },
    function (err, db) {
        if (err) {
            console.log(err);
            return;
        }

        const grDataBase = db.db('gr');
        grDataBase
            .collection('yjj')
            .insertOne(
                {
                    age: 24
                },
                err => {
                    if (err) {
                        console.log(err);
                    }

                    console.log('insert ok');
                    db.close();
                }
            );
    });