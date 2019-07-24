var bg = ['chase', 'dog', 'lmp3', 'mazda', 'mods', 'rebellion', 'thompson', 'wec', 'wet'];
var info;

document.addEventListener('DOMContentLoaded', function() {
  let index = Math.floor(Math.random()*bg.length);
  document.body.style = "background: url('bg/" + bg[index] + ".jpg') no-repeat center center fixed; background-size: cover;";
  if(window.location.pathname == 'photos.html') {
    loadInfo(index);
    document.getElementById('next').addEventListener('click', function(){
      displayInfo(Math.floor(Math.random()*bg.length));
    });
  }
});

function loadInfo(i) {
  let req = new XMLHttpRequest();
  req.addEventListener("load", function(){
    info = JSON.parse(req.responseText);
    displayInfo(i);
  });
  req.open('GET', 'https://mbeader.github.io/info.json');
  req.send();
}

function displayInfo(i) {
  document.getElementById('date').textContent = info[i].date;
  document.getElementById('track').textContent = info[i].track;
  document.getElementById('location').textContent = info[i].location;
  document.getElementById('event').textContent = info[i].event;
  document.getElementById('series').textContent = info[i].series;
  document.getElementById('subject').textContent = info[i].subject;
}