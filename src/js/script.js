function playSound(e) {
  const keyItem = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  btn.dataset.item = `${e.keyCode}`; //записываем код клавиши в кнопку для stop
  btn.innerHTML = 'Stop playing music';
  audios.forEach((audio) => {
    audio.classList.remove('stoping');
  });

  if (!keyItem) {
    return;
  } else if (e.keyCode == keyItem.dataset.key) {
    keyItem.classList.add('play');
    sound.currentTime = 0;
    sound.play();
  }
}

function stopSound(e) {
  const sound = document.querySelector(`audio[data-key="${btn.dataset.item}"]`);

  if (sound.classList.contains('stoping')) {
    sound.classList.remove('stoping');
    sound.play();
    this.innerHTML = 'Stop playing music';
    return;
  }
  sound.pause();
  audios.forEach((audio) => audio.classList.remove('stoping'));
  sound.classList.add('stoping');
  this.innerHTML = `Play <i class="fa-solid fa-play"></i>`;
}

function removeAnimation(e) {
  if (e.propertyName !== 'transform') return;

  e.target.classList.remove('play');
  console.log(e);
}

const keyWrap = document.querySelector('.keys-wrap');
const btn = document.querySelector('.btn');
const audios = Array.from(document.querySelectorAll('audio'));

keyWrap.addEventListener('transitionend', removeAnimation);
btn.addEventListener('click', stopSound);
window.addEventListener('keydown', playSound);
