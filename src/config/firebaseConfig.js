import admin from 'firebase-admin';

let configfirebase = () => {
    let serviceAccount = require("./../public/database-ed27f-firebase-adminsdk-zg1yj-180e761110.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://database-ed27f.firebaseio.com"
    });
    var db = admin.database();
    var ref = db.ref("doan/thongso");
    ref.once("value", function(snapshot){
        console.log(snapshot.val());
    });
   
};

module.exports = configfirebase;