//JSON.stringify()用于从一个对象解析出字符串
//JSON.parse用于从一个字符串中解析出json对象
//cursor.toArray()将游标转成一个数组对象


mongodb = new Mongo("10.10.5.9:27017");
var BeiJingDomain =  mongodb.getDB("BeiJingDomain");
print(BeiJingDomain);

var cursor = BeiJingDomain.DeviceGroup.find({},{_id:1,DynamicDevices:1,StaticDevices:1}).limit(1).toArray();
print(JSON.stringify(cursor[0]));
