
const getRandomIndex = (min,max) => {
	return Math.floor(Math.random() * (max-min)) + min;
};

const swap = (arr,a,b) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
};

const shuffle = (arr) => {
	let min = 0;
	let max = arr.length - 1;
	for(let i = 0; i < arr.length; i++) {
		let r = getRandomIndex(min, max);
		swap(arr,i,r);
	}
	return arr;
};

const data = [1,2,3,4,5,6,7,8,9];

console.log(shuffle(data));
