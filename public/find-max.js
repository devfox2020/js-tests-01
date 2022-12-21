Math.randomInt = (max) => Math.floor( Math.random() * max );

const chrono = Date;

let stop, start;
const arrLength = 10_000_000;

// console.log("# find-max benchmark, Array.length:", arrLength);
// const arr1 = new Array(arrLength);
// const arr2 = new Array(arrLength);
// start = chrono.now();
// for(let i = 0; i < arrLength; ++i) {
//     arr1[i] = Math.random();
//     arr2[i] = Math.random();
// }
// stop = chrono.now();
// console.log("fill 2 arrays, ms:", stop - start);

console.log(`# Int32Array(${arrLength})`, );
const arr1 = new Int32Array(arrLength);
const arr2 = new Int32Array(arrLength);
start = chrono.now();
for(let i = 0; i < arrLength; ++i) {
    arr1[i] = Math.randomInt(1000000);
    arr2[i] = Math.randomInt(1000000);
}
stop = chrono.now();
console.log("fill 2 arrays, ms:", stop - start);

let arr = null;
let max = null;


start = chrono.now();
arr = arr1;
max = arr.reduce( (max, a) => {
    return (max<a)? a : max;
}, arr[0]);
stop = chrono.now();
//console.log("max =", max);
console.log("findMax-reduce(), ms:", stop - start);


start = chrono.now();
arr = arr2;
max = arr[0];
for(let i in arr) {
    if(max<arr[i]) max = arr[i];
}
stop = chrono.now();
//console.log("max =", max);
console.log("findMax-for(), ms:", stop - start);


//let max = Math.max.apply(null,arr);



