// TASK-B
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function countDigits(number) {
  let count = 0;
  for (let i of number) {
    if (i >= "0" && i <= "9") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
// console.log(countDigits("ad2a54y79wet0sfgb916542"));
// TASK-A
/*
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

// function countLetter(harf, soz) {
//   let nechta = 0;
//   for (let letter of soz) {
//     if (letter === harf) {
//       nechta++;
//     }
//   }
//   return nechta;
// }

// console.log(countLetter("e", "engineer"));
// console.log(countLetter("n", "engineer"));

/*
console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq xato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "uzingiz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

// CALLBACK function

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("Insert number!", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);

    // setTimeout(function () {
    //   callback(null, list[5]);
    // }, 5000);
  }
}
*/
// maslahatBering(21, (err, data) => {
//   if (err) console.log("Error:", err);
//   console.log(data);
// });

// maslahatBering("Hello", (err, data) => { // null
//   if (err) console.log("Error:", err);
//   console.log(data);
// });

// maslahatBering("Hello", (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log(data);
//   }
// });

// console.log("Passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("Passed here 1");

// ASYNC function
/*
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("Indsert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];

    // setTimeout(function () {
    //   callback(null, list[5]);
    // }, 5000);
  }
}
*/
// call via then/catch
/*
console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
    console.log("Javob:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
console.log("passed here 1");
*/

/*
maslahatBering(20)  // Promise hell yoki callback hell
  .then((data) => {
    maslahatBering(30)
      .then((data) => {
        maslahatBering(40)
          .then((data) => {
            console.log("Javob:", data);
          })
          .catch((err) => {
            console.log("Error:", err);
          });
        console.log("Javob:", data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    console.log("Javob:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
*/

// call via async/await
/*
async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(70);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}

run();
*/
// Promise
/*
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("Indsert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(list[5]);
      }, 5000);
    });
  }
}

async function run() {
  let javob = await maslahatBering(25); // bu bajariladi va keyingisiga utiladi
  console.log(javob);
  javob = await maslahatBering(70); // bu yerda 5 sek kutadi
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}

run();
*/
/*
const advice = [
  "Focus on learning the basics", // 18–20
  "Build your skills and do internships", // 21–23
  "Start building your career", // 24–26
  "Look for better opportunities", // 27–30
  "Consider becoming a mentor", // 31+
];

function universityAdvice(age) {
  return new Promise((resolve, reject) => {
    if (typeof age !== "number") reject("Please insert a number");
    else if (age < 18) reject("You are under age");
    else if (age >= 18 && age <= 20) resolve(advice[0]);
    else if (age >= 21 && age <= 23) resolve(advice[1]);
    else if (age >= 24 && age <= 26) resolve(advice[2]);
    else if (age >= 27 && age <= 30) resolve(advice[3]);
    else if (age >= 31) resolve(advice[4]);
  });
}

// universityAdvice(25)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function run() {
  let answer = await universityAdvice(19);
  console.log(answer);
  answer = await universityAdvice(25);
  console.log(answer);
  answer = await universityAdvice(35);
  console.log(answer);
}

run();
*/
