
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

const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

/**
 * [8,6,1][2]
 *
 * [9,10][15];
 *
 * start = 0
 * end = 7 = length
 *
 * 	pivot = arr[6] = 8
 * 	j = start;
 * 	i = start; loop through arr; i++; 
 *
 */

const partition = (arr, count, start, end) => {
	const pivot = arr[end-1];
	let j = start;
	for(let i=start ; i<end - 1; i++) {
		if(arr[i] <= pivot) {
			count.n++; //Keeping track of swaps as 'ticks'
			swap(arr, i, j);
			j++;
		}
	}
	count.n++; //Keeping track of swaps as 'ticks'
	swap(arr, end-1, j);
	return j;
};

/**
 * Array is sorted in place
 */

const quickSort = (arr, count, start=0, end=arr.length) => {

	if(start >= end) {
		return arr;
	}

	const mid = partition(arr, count, start, end);
	arr = quickSort(arr, count, start, mid);
	arr = quickSort(arr, count, mid + 1, end);
	return arr;
};

const count = {n:0};
quickSort(data, count);
console.log(`quick sort finished in ${count.n} operations`);
