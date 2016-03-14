function HashTable(){
	this.table = new Array(137);
	this.simpleHash = simpleHash;//散列函数
	this.showDistro = showDistro;
	this.put = put;
	// this.get = get;
}

function simpleHash(data){
	var total = 0;
	for (var i = 0; i < data.length; i++){
		total += data.charCodeAt(i);//字符串的每个字符的ASCII码之和
	}
	return total % this.table.length;//total对数组长度取余
}

function put(data){//插入元素
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

function showDistro(){//显示散列表中的数据
	var n = 0;
	for (var i = 0; i < this.table.length; i++){
		if (this.table[i] != undefined){
			alert(i + ":" + this.table[i]);
		}
	}
}



function test(){//simpleHash
	var cavs = ["irving","smith","james","love","mozgov"];
	var cavsTable = new HashTable();
	for (var i = 0; i < cavs.length; i++){
		cavsTable.put(cavs[i]);
	}
	cavsTable.showDistro();
}



function BetterHashTable(){//改进散列函数后的散列表构造函数
	this.table = new Array(137);
	this.betterHash = betterHash;//散列函数
	this.showDistro = showDistro;
	this.put = betterPut;
	// this.get = get;
}

function betterHash(string){
	var hash = 31;//用于每次求和之前的乘法，具体数值视情况而定，但必须是质数
	var total = 0;
	for (var i = 0; i < string.length; i++){
		total += hash * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	return parseInt(total);
}

function betterPut(data){
	var pos = this.betterHash(data);
	this.table[pos] = data;
}


function testBetter(){
	var wars = ["curry","thompson","green","bogut","iguodala","livinston","speights","barnes","barbosa"];
	var warsTable = new BetterHashTable();
	for (var i = 0; i < wars.length; i++){
		warsTable.put(wars[i]);
	}
	warsTable.showDistro();
}