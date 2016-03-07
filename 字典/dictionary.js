function Dictionary(){
	this.datastore = [];
	this.keystore = [];
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
}

function add(key, value){
	this.keystore.push(key);
	this.datastore[key] = value;
}

function find(key){
	return this.datastore[key];
}

function remove(key){
	delete this.datastore[key];//删除数据
	for (var i = 0; i < this.keystore.length; i++){
		if (this.keystore[i] == key){
			delete this.keystore[i];
			break;
		}//删除key
	}
}

function showAll(){
	for (var i = 0; i < this.keystore.length; i++){
		var key = this.keystore[i];
		var data = this.datastore[key];
		alert(key + "->" + data);
	}
}

//测试函数
function test(){
	var cavs = new Dictionary();
	cavs.add("PG","Kyrie Irving");
	cavs.add("SG","JR Smith");
	cavs.add("SF","Lebron James");
	cavs.add("PF","Kevin Love");
	cavs.add("C","Timofey Mozgov")
	cavs.showAll();
	alert("变阵！");
	cavs.remove("C");
	cavs.remove("PF");
	cavs.remove("SF");
	cavs.add("SF","Iman Shampert");
	cavs.add("PF","Lebron James");
	cavs.add("C","Tristan Thompson");
	cavs.showAll();
}