const soundbutton = document.getElementById('soundbutton')
var rellax = new Rellax('.rellax');
var sound = new Howl({
    src: ['https://assets.mixkit.co/sfx/preview/mixkit-fast-small-sweep-transition-166.mp3'],
  });


soundbutton.addEventListener("click", () => {sound.play(); playing=false;})

