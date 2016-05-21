myConn = new Mongo("localhost");
newDB = myConn.getDB("NewDB");
newDB.createCollection("MyCollection");
dbs = myConn.getDBNames();

for(i in dbs)
{
    print(dbs[i]);
    db = myConn.getDB(dbs[i]);
    status = db.stats();
    print(db.getName());
    printjson(status)
}

var a = ["wangdong","dwang","21234"];
for(var i = 0; i < a.length; i++)
{
    print(a[i]);
}
for(i in a)
{
    print(a[i]);
}