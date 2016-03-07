//节点构造函数
function Node(element){
	this.element = element;
	this.previous = null;
	this.next = null;
}

//双向列表构造函数
function Dlinkedlist(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.remove = remove;
	this.findLast = findLast;
	this.displayReverse = displayReverse;
}



function find(item){
	var currNode = this.head;
	while (currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item){
	var newNode = new Node(newElement);
	var currNode = this.find(item);
	newNode.next = currNode.next;
	newNode.previous = currNode;
	currNode.next = newNode;
}

function display(){
	var currNode = this.head;
	while (!(currNode.next == null)){
		alert(currNode.next.element);
		currNode = currNode.next;
	}
}

function remove(item){
	var currNode = this.find(item);
	//需不需要在删除节点之前加一个是不是尾节点的判断?
	if (!(currNode.next == null)){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.previous = null;
		currNode.next = null;
	}else{
		currNode.previous.next = null;
		currNode.previous = null;
	}
}

function findLast(){
	var currNode = this.head;
	while (!(currNode.next == null)){
		currNode = currNode.next;
	}
	return currNode;
}

function displayReverse(){
	var currNode = this.findLast();
	while (!(currNode.previous == null)){
		alert(currNode.element);
		currNode = currNode.previous;
	}
}



//测试函数
function test(){
	var station = new Dlinkedlist();
	station.insert("航天城","head");
	station.insert("凤栖原","航天城");
	station.insert("三爻","凤栖原");
	station.insert("会展中心","三爻");
	station.insert("纬一街","会展中心");
	station.insert("小寨","纬一街");
	station.insert("体育场","小寨");
	alert("正向display");
	station.display();
	alert("反向display");
	station.displayReverse();
	alert("删除“体育场”");
	station.remove("体育场");
	alert("删除成功！");
	station.display();
}