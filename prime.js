const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

const inputNumber = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukan input angka \n", (answer) => {
      if (!isNaN(answer)) return resolve(answer);
      rl.close();
      reject(new Error("Input yang anda masukan bukan angka"));
    });
  });
};

const resume = () => {
  return new Promise((resolve, reject) => {
    rl.question("Apakah lagi? (Tekan Y, selain itu close) \n", (answer) => {
      if (answer.toString().toLowerCase() === "y") return resolve(true);
      resolve(false);
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

    if (x === 1 && x <= 3) {
      console.log("1");
      console.log(true);
      const again = await repeat();
      if (again === true) return Main();
      return rl.close();
    }
    if (x < 1) {
      console.log("2");
      console.log(false);
      const again = await repeat();
      if (again === true) return Main();
      return rl.close();
    }
    if (x > 3) {
      let pembagi = 0;
      for (let i = 1; i <= x; i++) {
        // jadi ini operator pembagi apakah ada sisa atau tidak, jika ada sisa !=0 jika tidak ada sisa ==0
        if (x % i === 0) pembagi++;
      }
      if (pembagi == 2) console.log(true);
      else console.log(false);

      const again = await repeat();
      if (again === true) return Main();
      return rl.close();
    }
  } catch (err) {
    console.log(err);
  }
};

Main();
