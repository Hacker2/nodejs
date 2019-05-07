const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
 if (err) throw new Error(err);
 console.log("Connected!");
 //db.close();

db.collection('myCollection').insertOne({
  "myFirstDocument": {
  "greetings": "Hello",
  "farewell": "Bye"
  }}, function (err, result) {
    if (err) throw new Error(err);
    console.log("Inserted a document into the myCollection collection!");
    db.close();
});

var cursor = db.collection('myCollection').find();
cursor.each(function (err, doc) {
  if (err) throw new Error(err);
  if (doc != null) {
    console.log(doc);
  } else {
    db.close();
  }
});

db.collection('myCollection').updateOne({
  greetings: "Hello" },
  { $set: { greetings: "Hi" }},
  function (err, result) {
    if (err) throw new Error(err);
    db.close();
});

db.collection('myCollection').deleteOne(//deleteMany
 { greetings: "Hi" },
 function (err, result) {
  if (err) throw new Error(err);
  db.close();
});

});