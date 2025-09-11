// ............................................................ Async Function......................................................
// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved ");
// });

// async function getData() {
//   return p;
// }
// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// ....................................... Using await in async Function ...............................................................

// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved ");
// });

// async function resolvePromise() {
//   const value = await p;
//   console.log(value);
// }

// resolvePromise();

// ............................................................... Deep Dive in Async Await.................................................

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("hello world!");

//   const val = await p1;
//   console.log("namaste js");
//   console.log(val);

//   const val2 = await p2;
//   console.log("namaste js");
//   console.log(val2);
// }
// handlePromise();

// ...................................................................... FETCH ...........................................

// const API_url = "https://api.github.com/users/ashishmishra75";

// async function handlePromise() {
//   const data = await fetch(API_url);

//   const jsonValue = await data.json();

//   console.log(jsonValue);
// }
// handlePromise();

// ........................................................... EROR HANDELLING..................................................
const API_url = "https://api.github.cfindasmishorfrnds";

async function handlePromise() {
  try {
    const data = await fetch(API_url);

    const jsonValue = await data.json();

    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();
