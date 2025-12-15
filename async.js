// setTimeout example
console.log("Starting homework...");

setTimeout(() => {
  console.log("Homework finished after waiting.");
}, 2000);

console.log("Still working while waiting...");

// Promise example
const coffeePromise = new Promise((resolve, reject) => {
  let coffeeReady = true;

  if (coffeeReady) {
    resolve("Coffee is ready!");
  } else {
    reject("No coffee yet.");
  }
});

coffeePromise
  .then(message => console.log(message))
  .catch(error => console.log(error));

// async / await example
async function startDay() {
  try {
    const shower = await new Promise(resolve =>
      setTimeout(() => resolve("Shower done"), 1000)
    );
    console.log(shower);

    const breakfast = await new Promise(resolve =>
      setTimeout(() => resolve("Breakfast eaten"), 1500)
    );
    console.log(breakfast);

    console.log("Ready for class!");
  } catch (error) {
    console.log("Something went wrong.");
  }
}

startDay();
