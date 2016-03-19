function quickSort(arr){
	
	if (arr.length=== 0){
		return [];
	}
	var len = arr.length;

	var pivotIndex = Math.floor(len / 2);
	var pivot = arr[pivotIndex];

	var left = [];
	var right = [];

	for (var i = 0; i < len; i++){
		if (arr[i] < pivot){
			left.push(arr[i]);
		}else if(arr[i] > pivot){
			right.push(arr[i]);
		}

	}

	 return quickSort(left).concat(pivot, quickSort(right));
}

function test(){
	var testArr = [1,2,9,0,5,10,7,8,6,4];
	
	alert(quickSort(testArr));
}
