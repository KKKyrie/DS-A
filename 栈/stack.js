 function Stack(){//栈的构造函数
                this.dataStore = [];//存储数据的数组
                this.top = 0;//栈顶位置
                this.getLength = getLength;
                this.push = push;
                this.pop = pop;
                this.peek = peek;
                this.clear = clear;
                this.display = display;
            }
            
            function getLength(){//获得元素个数
                return this.top;
            }
            
            function push(element){//加入元素
                this.dataStore[this.top] = element;
                this.top++;
            }
            
            function pop(){//弹出栈顶元素BUG
                return this.dataStore[--this.top];
            }
            
            function peek(){//查看栈顶元素
                return this.dataStore[this.top-1];
            }
            
            function clear(){//清空栈
                delete this.dataStore;
                this.dataStore = [];
                this.top = 0;
            }
            
            function display(){
                var stack = [];
                for (var i=0; i<this.top; i++){
                    stack[i] = this.dataStore[i];
                }
                return stack;
            }
            
            //测试
            function test(){
                var cavs = new Stack();
                cavs.push("Irving");
                cavs.push("James");
                cavs.push("Love");
                cavs.push("Mozgov");
                cavs.push("Tompson");
                cavs.push("Smith");
                
                alert(cavs.display());
                
                alert(cavs.pop());
                alert(cavs.display());
            }
            
            //进制转换
            function scale(base){
                var number = document.getElementById("number").value;//获得输入
                var result = new Stack();
                while (number > 0){
                    result.push(number % base);
                    number = Math.floor(number / base);
                }
                var final = "";
                while(result.getLength() > 0){
                    final = final + result.pop();
                }
                alert(final);
            }
            
            //判断回文
            function isPalindrome(){
                var word = document.getElementById("word").value;
                var stack = new Stack();
                for (var i=0; i<word.length; i++){
                    stack.push(word[i]);
                }
                var revert = "";
                while (stack.getLength() > 0){
                    revert = revert + stack.pop();
                }
                if (word == revert){
                    alert("是回文！");
                }else{
                    alert("不是回文！");
                }
            }
            
            //判断算数表达式中括号是否匹配
            function check(){
                var expression = document.getElementById("expression").value;
                var brackets = new Stack();//只用来保存括号的栈
                for (var i=0; i<expression.length; i++){
                    if (expression[i] == "("){
                        brackets.push(expression[i]);
                    }
                    if (expression[i] == ")"){
                        brackets.pop();
                    }
                }
                if (brackets.getLength() != 0){
                    alert("括号不匹配！");
                }else{
                    alert("匹配！");
                }
            }
            
            //佩兹糖果盒
            function sugar(){
                var sugars = ["红","白","红","白","红","黄","白","白","黄","白"];
                alert(sugars);
                var no_yellow = new Stack();
                for (var i=0; i<sugars.length; i++){
                    if (sugars[i] != "黄"){
                        no_yellow.push(sugars[i]);
                    }
                }
                alert("扔掉黄色");
                var no_yellow_sugars = [];
                while(no_yellow.getLength() > 0){
                    no_yellow_sugars.push(no_yellow.pop());
                }
                no_yellow_sugars.reverse();
                alert(no_yellow_sugars);
            }