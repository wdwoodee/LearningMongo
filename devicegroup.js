//JSON.stringify()���ڴ�һ������������ַ���
//JSON.parse���ڴ�һ���ַ����н�����json����
//cursor.toArray()���α�ת��һ���������


mongodb = new Mongo("10.10.5.9:27017");
var BeiJingDomain =  mongodb.getDB("BeiJingDomain");
print(BeiJingDomain);

var cursor = BeiJingDomain.DeviceGroup.find({},{_id:1,DynamicDevices:1,StaticDevices:1}).limit(1).toArray();
print(JSON.stringify(cursor[0]));
