 function test1(){
                    function StudentGrade(){
                        this.grades = [80];
                        this.addGrade = addGrade;//函数引用
                        this.averageGrade = averageGrade;//同上
                    }
                
                    function addGrade(grade){
                        this.grades.push(grade);
                    }
                
                    function averageGrade(){
                        var sum = 0;
                        var average = 0;
                        for (var i=0; i < this.grades.length; i++){
                            sum = sum + this.grades[i];
                        }
                        average = sum / this.grades.length;
                        return average;
                    }
                    
                    var kyrie = new StudentGrade();
                    kyrie.addGrade(90);
                    var kyrie_average = kyrie.averageGrade();
                    alert(kyrie_average);
                }
            
            
            
            //test2
            function test2(){
                var name = ["chadler","monica","joey","ross","rachel","fheobe"];
                name.reverse();
                alert(name);
                name.sort();
                alert(name);
                name.reverse();
                alert(name);
            }
            
            
            //test3
            function test3(){
                function Alphabet(){
                    this.word = ["k","y","r","i","e"];
                }
                
                var kyrie = new Alphabet();
                var kyriestr = kyrie.word.join("");
//                var kyriestr = kyrie.word.toString();
                alert(kyriestr);
            }