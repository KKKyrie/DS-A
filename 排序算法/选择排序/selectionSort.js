function sort(arr){
    var length = arr.length;
    for (var i = 0; i < length; i++){
        min = arr[i];
        k = i;
        for (var j = i + 1; j < length; j++){//每轮在剩余元素中找一个最小值
            if (min > arr[j]){
                min = arr[j];
                k = j;
            }
        }
        arr[k] = arr[i];
        arr[i] = min;
    }
}

function test(){
    var arr = [1,10,9,30,8,3,2,4,7,6,5];
    sort(arr);
    var result = arr.join("<");
    alert(result);
}