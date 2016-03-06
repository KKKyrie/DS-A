//列表构造函数
            function List(){
                this.listSize = 0;//初始列表长度0
                this.dataStore = [];//列表内储存元素用的数组
                this.pos = 0;//列表的当前位置
                this.length = length;//返回列表长度的方法
                this.append = append;//在列表的末尾添加新元素
                this.find = find;//在列表中查找某一元素
                this.remove = remove;//从列表中删除某一元素
                this.toString = toString;//显示列表中的元素
                this.insert = insert;//向列表中插入一个元素
                this.clear = clear;//清空列表中的所有元素
                this.contains = contains;//判断给定元素是否在列表中
                this.front = front;
                this.end = end;
                this.prev = prev;
                this.next = next;
                this.currPos = currPos;
                this.moveTo = moveTo;
                this.getElement = getElement;
            }
            
            function length(){
                return this.listSize;
            }
            
            function append(element){
                this.dataStore[this.listSize++] = element;
                //添加新元素并给listSize加1
            }
            
            function find(element){
                for (var i=0; i < this.dataStore.length; i++){
                    if (this.dataStore[i] == element){
                        return i;//找到指定元素返回该元素在数组中的下标
                    }
                }
                return -1;//没找到指定元素返回-1
            }
            
            function remove(element){
                var findAt = this.find(element);//调用find函数找到指定元素
                if (findAt > -1){//找到了指定元素
                    this.dataStore.splice(findAt,1);
                    this.listSize--;//列表长度减一
                    return true;//删除成功
                }else if (findAt == -1){//没有找到指定元素
                    return false;//删除失败
                }
            }
            
            function toString(){
                return this.dataStore;//直接返回数组
            }
            
            function insert(element,after){//需要插入的元素和即将要插入的元素之前的元素（插入位置）
                var insertPos = this.find(after);
                if (insertPos > -1){//查找到该元素
                    this.dataStore.splice(insertPos+1,0,element);//起始位置，需要删除的元素个数，新插入的元素
                    this.listSize++;
                    return true;
                }else if (insertPos == -1){//没有查找到指定元素
                    return false;
                }
            }
            
            function clear(){
                delete this.dataStore;
                this.dataStore = [];
                this.listSize = 0;
                this.pos = 0;
            }
            
            function contains(element){
                for (var i=0; i < this.dataStore.length; i++){
                    if (this.dataStore[i] == element){//找到该元素
                        return true;//存在
                    }
                }
                return false;//不存在
            }
            
            function front(){//将列表的当前位置移动到第一个元素
                this.pos = 0;
            }        
            
            function end(){//将列表的当前位置移动到最后一个元素
                this.pos = this.listSize-1;
            }
            
            function prev(){//将当前位置前移一位
                if (this.pos > 0){
                    this.pos--;
                }
            }
            
            function next(){//将当前位置后移一位
                if (this.pos < this.listSize-1){
                    this.pos++;
                }
            }
            
            function currPos(){//返回当前位置
                return this.pos;
            }
            
            function moveTo(position){//将当前位置移动到指定位置
                this.pos = position;
            }
            
            function getElement(){//返回当前位置的元素
                return this.dataStore[this.pos];
            }
            
            //练习题1
            function prac1(){
                var list = new List();
                list.append(1);
                list.append(2);
                list.append(5);
                list.append("a");
                alert(list.toString());
                
                list.insertBiggest = insertBiggest;
                
                function insertBiggest(element){
//                    var isBiggest = false;
                    var bigger = element;
                    for (var i=0; i < this.dataStore.length; i++){
                        if (this.dataStore[i] > element){
                            bigger = this.dataStore[i];
                        }
                    }
                    if (bigger != element){
                        alert("插入失败");
                    }else if (bigger == element){
                        this.append(element);
                        alert(this.toString());
                    }
                }
                
                list.insertBiggest("z");
            }
            
            //练习题2与1同理
            //练习题3
            function prac3(){
                function Person(name,gender){
                    this.name = name;
                    this.gender = gender;
                }
                
                var Chandler = new Person("Chandler Bing","male");
                var Monica = new Person("Monica Geller","female");
                var Ross = new Person("Ross Geller","male");
                var Rachel = new Person("Rachel Green","female");
                var Joey = new Person("Joey Tribbianian","male");
                var Pheobe = new Person("Pheobe Buffey","female");
                
                var friends = new List();
                friends.append(Chandler);
                friends.append(Monica);
                friends.append(Ross);
                friends.append(Rachel);
                friends.append(Joey);
                friends.append(Pheobe);
                
                friends.filterByGender = filterByGender;
                
                function filterByGender(filterGender){
                    var afterFilter = [];
                    for (var i=0; i < this.dataStore.length; i++){
                        if (this.dataStore[i].gender == filterGender){
                            afterFilter.push(this.dataStore[i]);
                        }
                    }
                    return afterFilter;
                }
                
                var afterFilter = friends.filterByGender("female");
                for (var i=0; i < afterFilter.length; i++){
                    alert(afterFilter[i].name);
                }
            }