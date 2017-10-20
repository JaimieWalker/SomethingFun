var db;
const dbName = "SomethingFunDB";
var request = indexedDB.open(dbName,3);
request.onerror = function(event) {
	alert("Couldn't open connection to indexedDB");
  // Do something with request.errorCode!
};
request.onsuccess = function(event) {
	db = event.target.result;
  // Do something with request.result!
};


var database = {
	db : function(){
		if (db === undefined) {
			this.db = db;
		}else{
			return this.db;
		}
	},
	objectStore : undefined,
	createObjectStore : function(){
		objectStore = db.createObjectStore("User",{autoIncrement : true});
	},
	createIndexes : function(){
		objectStore.createIndex("name","name");
		objectStore.createIndex("gender","gender");
	}
}