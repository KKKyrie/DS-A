function Set(){
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.show = show;
    this.contains = contains;
    this.union = union;
    this.intersect = intersect;
    this.size = size;
    this.isSubSetOf = isSubSetOf;
}

function add(data){
    if (this.dataStore.indexOf(data) < 0){
        this.dataStore.push(data);
        return true;
    }else{
        return false;
    }
}

function remove(data){
    var pos = this.dataStore.indexOf(data);
    if (pos > -1){
        this.dataStore.splice(pos,1);
        return true;
    }else{
        return false;
    }
}

function show(){
    return this.dataStore;
}

function contains(data){
    if (this.dataStore.indexOf(data) > -1){
        return true;
    }else{
        return false;
    }
}

function union(set){//集合的合并
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++){
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; i++){
        if (!tempSet.contains(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function intersect(set){//交集
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++){
        if (set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function size(){
    return this.dataStore.length;
}


function isSubSetOf(set){//判断子集
    if (this.size() > set.size()){
        return false;
    }else{
        for (var i = 0; i < this.dataStore.length; i++){
            if (set.contains(this.dataStore[i])){
                return false;
            }
        }
    }
    return true;
}

function differ(set){
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++){
        if (!set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}






function test(){
    var majingchao = new Set();
    majingchao.add("篮球");
    majingchao.add("听歌");
    majingchao.add("考研");
    majingchao.add("训练");
    var liujianing = new Set();
    liujianing.add("篮球");
    liujianing.add("工作");
    liujianing.add("学习");
    liujianing.add("跑步");
    alert("马景超：" + majingchao.show());
    alert("刘佳宁：" + liujianing.show());
    var common = new Set();
    common = majingchao.intersect(liujianing);
    alert("交集：" + common.show());
    
    var sum = new Set();
    sum = majingchao.union(liujianing);
    alert("并集：" + sum.show());
}