const chalk = require('chalk');
const { celciusToFahrenheit } = require('./rumusSuhu');

console.log(chalk.bold.cyan('==============================='));
console.log(chalk.bold.yellow('   PROGRAM KONVERSI SUHU'));
console.log(chalk.bold.cyan('==============================='));

const daftarSuhu = [0, 25, 37, 100];

daftarSuhu.forEach((c) => {
  const f = celciusToFahrenheit(c);
  console.log(
    chalk.green(`${c}°C`) +
    chalk.white(' = ') +
    chalk.red.bold(`${f}°F`)
  );
});

console.log(chalk.bold.cyan('==============================='));
console.log(chalk.magenta('Dibuat oleh: Kelompok 7'));