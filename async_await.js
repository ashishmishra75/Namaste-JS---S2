// ............................ Async Function..........................

// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved ");
// });

// async function getData() {
//   return p;
// }
// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// ....................................... Using await in async Function ......................................................

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved ");
});

async function resolvePromise() {
  const value = await p;
  console.log(value);
}

resolvePromise();

console.log("hello");
