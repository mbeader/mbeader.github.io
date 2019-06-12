var bg = ['chase', 'dog', 'lmp3', 'mazda', 'mods', 'rebellion', 'thompson', 'wec', 'wet'];

document.addEventListener('DOMContentLoaded', function() {
  document.body.style = "background: url('bg/" + bg[Math.floor(Math.random()*bg.length)] + ".jpg') no-repeat center center fixed; background-size: cover;";
});