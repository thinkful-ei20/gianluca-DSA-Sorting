
const bucketSort = (arr, min, max) => {
	const range = max - min + 1;
	const buckets = new Array(range);

	for(let i = 0; i < arr.length; i++) {
		if(buckets[arr[i] - min]){
			buckets[arr[i] - min].push(arr[i]);
		} else {
			buckets[arr[i] - min] = arr[i];
		}
	}

	const result = [];

	for(let bucket in buckets ) {
		if(bucket) {
			for(let el in bucket) {
				result.push(el);
			}
		}
	}
	return result;
};

bucketSort(data);

const low = 5;
const high = 150;
const data = [101,23,18,5,150,84];

console.log(bucketSort(data, low, high));

