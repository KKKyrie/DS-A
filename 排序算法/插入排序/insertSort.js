function insertSort(arr){
    for (var i = 1; i < arr.length; i++){
        var j = i;
        var temp = arr[i];
        while(j>0 && arr[j-1]>temp){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}


function test(){
    var arr = [10,2,1,5,4,7,8,6,9,3];
    alert(insertSort(arr));
}