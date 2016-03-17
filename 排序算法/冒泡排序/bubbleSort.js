function sort(arr){
    for (var i = 0; i < arr.length; i++){
        for (var j = i; j < arr.length; j++){
            if (arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function test(){
    var arr = [2,30,23,20,8,5,99];
    var result = arr.join(",");
    alert("原始数组：" + result);
    sort(arr);
    result = arr.join("<");
    alert("排序后：" + result);
}