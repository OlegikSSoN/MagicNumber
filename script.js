alert("Задумайте число");
alert("Помножте задумане число на 2");
alert("Додайте до результату 7");

const magicNumber = Number(prompt("Введіть що вийшло"));

if (magicNumber) {
  const resultNumber = (magicNumber - 7) / 2;
  alert("Ви задумали число " + resultNumber);
} else {
  alert("Це не число");
}
