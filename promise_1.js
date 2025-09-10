// const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

// ...........................Promise.....................................

// const cart = ["jeans", "kurtas", "shoes"];
// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });
// .......................... or we do this ...............................

// const cart = ["jeans", "kurtas", "shoes"];

// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummery(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return updateWalletBallence(paymentInfo);
//   });

// ...............................................................................................

// const cart = ["jeans", "kurtas", "shoes"];

// const promise = createOrder(cart); // OrderId

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// //Producer

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // createOrder
//     // validateCart
//     // orderId

//     if (!validateCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     // logic for CreateOrder
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }
// function validateCart(cart) {
//   return false;
// }

// .........................................Promise chaining...................................

// const cart = ["jeans", "kurtas", "shoes"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// //Producer

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // createOrder
//     // validateCart
//     // orderId

//     if (!validateCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     // logic for CreateOrder
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }
// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

// function validateCart(cart) {
//   return true;
// }

// .........................................catch things.............................................

// const cart = ["jeans", "kurtas", "shoes"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .then(function (orderId) {
//     console.log(" no matter what happen I will definetely be called");
//   });

// //Producer

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // createOrder
//     // validateCart
//     // orderId

//     if (!validateCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     // logic for CreateOrder
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }
// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

// function validateCart(cart) {
//   return false;
// }

// .......................................... Akshay Prmise chaining home work.......................................
