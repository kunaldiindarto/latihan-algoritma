const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

const inputNumber = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukan input angka \n", (answer) => {
      if (isNaN(answer)) {
        rl.close();
        reject(new Error("Input yang anda masukan bukan angka"));
      } else resolve(Math.sign(parseInt(answer)));
    });
  });
};

const resume = () => {
  return new Promise((resolve, reject) => {
    rl.question("Apakah lagi? (Tekan Y, selain itu close) \n", (answer) => {
      if (answer.toString().toLowerCase() === "y") {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

const processNumber = () => {
  return inputNumber().then((answer) => {
    return answer;
  });
};

const repeat = () => {
  return resume().then((answer) => {
    return answer;
  });
};

const Main = async () => {
  try {
    const x = await processNumber();
    if (x === 1 || x <= 3) {
      console.log(true);

      const again = await repeat();
      if (again === true) Main();
      else rl.close();
    } else if (x < 1) {
      console.log(false);

      const again = await repeat();
      if (again === true) Main();
      else rl.close();
    } else {
      let pembagi = 0;
      for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
          // jadi ini operator pembagi apakah ada sisa atau tidak, jika ada sisa !=0 jika tidak ada sisa ==0
          pembagi++;
        }
      }
      if (pembagi == 2) console.log(true);
      else console.log(false);

      const again = await repeat();

      if (again === true) Main();
      else rl.close();
    }
  } catch (err) {
    console.log(err);
  }
};

Main();
