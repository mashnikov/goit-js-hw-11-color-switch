const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;
let isActive = false;

refs.startBtn.addEventListener('click', startBGCChanging);

function startBGCChanging() {
  if (isActive) {
    console.log(
      'Функция изменения фонового цвета уже запущена! Ничего не делаю!',
    );
    return;
  }
  timerId = setInterval(
    () =>
      (refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)]),
    1000,
  );
  isActive = true;
}

refs.stopBtn.addEventListener('click', stopBGCChanging);

function stopBGCChanging() {
  clearInterval(timerId);
  isActive = false;
  console.log('setInterval stopped!');
}
