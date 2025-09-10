// ............................ Promise api...................................

// ............................ Promise.all()...............................

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve("P2 sucess"), 2000);
//   setTimeout(() => reject("P2 fails"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 sucess"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ...........................Promise.allSettled()..............................

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve("P2 sucess"), 2000);
//   setTimeout(() => reject("P2 fails"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 sucess"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   ......................   its best among the all

//   ......................   promise.race().......................................

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve("P2 sucess"), 2000);
//   setTimeout(() => reject("P2 fails"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 sucess"), 2000);
// });

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ..................................Promise.any()....................................

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve("P2 sucess"), 2000);
//   setTimeout(() => reject("P2 fails"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 sucess"), 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P1 fails"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 sucess"), 2000);
  setTimeout(() => reject("P2 fails"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P3 fails"), 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
