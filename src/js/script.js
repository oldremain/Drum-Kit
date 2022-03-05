window.addEventListener('keydown', playSound);

function playSound(e) {
  let $keyItem = document.querySelector(`[data-key="${e.keyCode}"]`);

  $keyItem.classList.add('play');
}
