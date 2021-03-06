 function Queue(){//构造函数
                this.dataStore = [];
                this.enter = enter;
                this.exit = exit;
                this.front = front;
                this.back = back;
                this.toString = toString;
                this.isEmpty = isEmpty;
            }
            
            function enter(element){//向队尾添加元素
                this.dataStore.push(element);
            }
            
            function exit(){//从队首删除元素
                this.dataStore.shift();
            }
            
            function front(){//读取队首元素
                return this.dataStore[0];
            }
            
            function back(){//读取队尾元素
                return this.dataStore[this.dataStore.length-1];
            }
            
            function toString(){//显示整个队列
                var str = "";
                for (var i=0; i < this.dataStore.length; i++){
                    str += this.dataStore[i] + "\n";
                }
                return str;
            }
            
            function isEmpty(){//判断队列是否为空
                if (this.dataStore.length == 0){
                    return false;
                }else{
                    return false;
                }
            }
            
            
            
            
            
            
            function testCavs(){
                var cavs = new Queue();
                cavs.enter("Kyrie");
                cavs.enter("Love");
                cavs.enter("Lebron");
                cavs.enter("Tompson");
                cavs.enter("Mozgov");
                alert(cavs.toString());
                cavs.exit();
                alert(cavs.toString());
                alert(cavs.front());
                alert(cavs.back());
            }
            
            
            
            //双向队列
            function Deque(){
                this.dataStore = [];
                this.front = front;
                this.back = back;
                this.enterhead = enterhead;//队首添加
                this.entertail = entertail;//队尾添加
                this.exithead = exithead;//队首删除
                this.exittail = exittail;//队尾删除
                this.toString = toString;
            }
            
            function enterhead(element){
                this.dataStore.unshift(element);
            }
            
            function entertail(element){
                this.dataStore.push(element);
            }
            
            function exithead(){
                this.dataStore.shift();
            }
            
            function exittail(){
                this.dataStore.pop();
            }
            
            function testWars(){
                var wars = new Deque();
                wars.entertail("Stephen");
                wars.entertail("Klay");
                wars.entertail("Bogut");
                wars.enterhead("Andre");
                alert(wars.toString());
                wars.exittail();
                wars.exithead();
                alert(wars.toString());
            }
            
            
            
            function isHuiwen(){
                var result = true;
                var text = document.getElementById("huiwen").value;
                var huiwen = new Deque();
                for (var i = 0; i < text.length; i++){
                    huiwen.entertail(text[i]);
                }
                for (var i = 0; i < (text.length-1)/2; i++){
                    if (huiwen.dataStore[i] == huiwen.dataStore[text.length-1-i]){
                        continue;
                    }else{
                        result = false;
                        break;
                    }
                }
                
                if (result == true){
                    alert("是！");
                }else{
                    alert("不是！");
                }
            }