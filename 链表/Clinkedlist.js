function Node(element){
	this.element = element;
	this.next = null;
}

function Clinkedlist(){
	this.head = new Node("head");
	this.head.next = this.head;
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
}

function findPrevious(item){
	var currNode = this.head;
	while ((currNode.next.element != "head") && (currNode.next.element != item)){
		currNode = currNode.next;
	}
	return currNode;
}

function find(item){
	var currNode = this.head;
	while (currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item){//若没找到指定节点，则直接把新节点插入到头结点的后方
	var newNode = new Node(newElement);
	var currNode = this.find(item);
	newNode.next = currNode.next;
	currNode.next = newNode;
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null) && !(currNode.next.element == "head")) {
		alert(currNode.next.element);
		currNode = currNode.next;
	}
}


function remove(item){
	var prevNode = this.findPrevious(item);
	prevNode.next = prevNode.next.next;
	prevNode.next.next = null;

}


//测试
function testCircle(){
	var wuxing = new Clinkedlist();
	wuxing.insert("金","head");
	wuxing.insert("木","金");
	wuxing.insert("水","木");
	wuxing.insert("火","水");
	wuxing.insert("土","火");
	wuxing.display();
	alert("删除“水”");
	wuxing.remove("水");
	wuxing.display();
}
