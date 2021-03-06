function Node(element){
			this.element = element;//保存节点上的数据
			this.next = null;//保存指向下一个节点的链接
		}

		function LinkedList(){
			this.head = new Node("head");//头结点
			this.find = find;
			this.insert = insert;
			this.remove = remove;
			this.findPrevious = findPrevious;
			this.display = display;
		}

		//找节点，按节点内容查找
		function find(item){
			var currNode = this.head;
			while (currNode.element != item){
				currNode = currNode.next;
			}
			return currNode;
		}

		//插入节点
		function insert(newElement, item){
			var newNode = new Node(newElement);
			var current = this.find(item);
			newNode.next = current.next;
			current.next = newNode;
		}

		//展示链表
		function display(){
			var currNode = this.head;
			while(!(currNode.next == null)){
				alert(currNode.next.element);//为了不显示头结点，程序只访问当前节点的后继节点的数据
				currNode = currNode.next;
			}
		}

		function remove(item){
			var prevNode = this.findPrevious(item);
			if (!(prevNode == null)){
				prevNode.next = prevNode.next.next;
				//跳过了待删除节点，让前一个节点指向了待删除节点的后一个节点
			}
		}

		function findPrevious(item){
			var currNode = this.head;
			while (!(currNode == null) && (currNode.next.element != item)){
				currNode = currNode.next;
			}
			return currNode;
		}


		//测试函数
		function test(){
			var station = new LinkedList();
			station.insert("航天城","head");
			station.insert("凤栖原","航天城");
			station.insert("三爻","凤栖原");
			station.display();
			station.remove("凤栖原");
			alert("删除‘凤栖原’");
			station.display();
		}