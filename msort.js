
const data = [
	89, 30, 25, 32, 72, 70, 51, 42, 25,
	24, 53, 55, 78, 50, 13, 40, 48, 32,
	26, 2 , 14, 33, 45, 72, 56, 44, 21,
	88, 27, 68, 15, 62, 93, 98, 73, 28,
	16, 46, 87, 28, 65, 38, 67, 16, 85,
	63, 23, 69, 64, 91, 9 , 70, 81, 27,
	97, 82, 6 , 88, 3 , 7 , 46, 13, 11,
	64, 76, 31, 26, 38, 28, 13, 17, 69,
	90, 1 , 6 , 7 , 64, 43, 9 , 73, 80,
	98, 46, 27, 22, 87, 49, 83, 6 , 39,
	42, 51, 54, 84, 34, 53, 78, 40, 14,
	5
];

const mergeSort = (arr, count) => {
	if(arr.length <= 1) {
		return arr;
	}

	let mid = Math.floor(arr.length/2);

	let left = arr.slice(0, mid);
	let right = arr.slice(mid, arr.length);

	mergeSort(left, count);
	mergeSort(right, count);

	return merge(left, right, arr, count);
};

const merge = (left, right, arr, count) => {

	let leftIndex = 0;
	let rightIndex = 0;
	let sortedIndex = 0;

	while(leftIndex < left.length && rightIndex < right.length) {
		if(left[leftIndex] < right[rightIndex]) {
			arr[sortedIndex] = left[leftIndex];
			leftIndex++;
			sortedIndex++;
			count.n++;
		} else {
			arr[sortedIndex] = right[rightIndex];
			rightIndex++;
			sortedIndex++;
			count.n++;
		}
	}

	while(leftIndex < left.length) {
		arr[sortedIndex] = left[leftIndex];
		leftIndex++;
		sortedIndex++;
		count.n++;
	}

	while(rightIndex < right.length) {
		arr[sortedIndex] = right[rightIndex];
		rightIndex++;
		sortedIndex++;
		count.n++;
	}

	return arr;
};

const count = {n:0};
mergeSort(data, count);
console.log(`merge sort finished in ${count.n} operations`);
