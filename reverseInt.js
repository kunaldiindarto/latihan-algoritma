const readline = require("readline");
const { stdout: output, stdin: input } = require("process");

const rl = readline.createInterface({ input, output });

const inputNumber = () => {
  return new Promise((resolve, reject) => {
    rl.question("Masukan nomer \n", (answer) => {
      // cek nomer
      if (!isNaN(answer)) return resolve(answer);
      rl.close();
      reject(new Error("Input yang anda masukan bukan angka"));
    });
  });
};

const repeat = () => {
  return new Promise((resolve, reject) => {
    rl.question("Lagi? (y) \n", (answer) => {
      if (answer.toString().toLowerCase() === "y") return resolve(true);
      resolve(false);
    });
  });
};

const processNumber = () => inputNumber().then((answer) => answer);
const again = () => repeat().then((answer) => answer);

const main = async () => {
  try {
    let x = await processNumber();
    let result = 0;
    let digit;
    /*
    % ambil sisa
    x|0 buletin ke kecil = hilangin coma; (<<) bisa juga pake itu
    */
    while (x) {
      digit = x % 10; //ambil kanan
      result = result * 10 + digit;
      x = (x / 10) << 0; //ambil kiri (bitwise operator)
    }
    console.log(result);

    const cobaLagi = await again();
    if (cobaLagi) return main();

    console.log("terima kasih sudah mencoba");
    rl.close();
  } catch (error) {
    console.log(error);
  }
};

main();
