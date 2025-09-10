// ............................ Async Function..........................

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved ");
});

async function getData() {
  return p;
}

getData.then((res) => console.log(res));
