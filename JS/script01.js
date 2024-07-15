window.addEventListener(`load`, (e) => {
  let m = document.querySelector(`#videoMarker`);
  m.addEventListener("markerFound", (e) => {
    let v = document.querySelector(`#miVideo`);
    v.play();
  });

  m.addEventListener("markerLost", (e) => {
    let v = document.querySelector(`#miVideo`);
    v.pause();
  });
});
