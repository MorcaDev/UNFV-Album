window.addEventListener(`load`, (e) => {
  AFRAME.registerComponent("vr-handler", {
    init: function () {
      var sky = document.querySelector("#sky");
      this.el.sceneEl.addEventListener("enter-vr", function () {
        sky.setAttribute("visible", "true");
        sky.setAttribute("src", "../src/images360/img360_001.jpg");
      });
      this.el.sceneEl.addEventListener("exit-vr", function () {
        sky.setAttribute("visible", "false");
      });
    },
  });
  document.querySelector("a-scene").setAttribute("vr-handler", "");



  let m = document.querySelector(`#videoMarker`);
  m.addEventListener("markerFound", (e) => {
    let v = document.querySelector(`#miVideo`);
    v.play();
  });

  m.addEventListener("markerLost", (e) => {
    let v = document.querySelector(`#miVideo`);
    v.pause();
  });

  let m02 = document.querySelector(`#videoMarker02`);
  m02.addEventListener("markerFound", (e) => {
    let v02 = document.querySelector(`#miVideo02`);
    v02.play();
  });

  m02.addEventListener("markerLost", (e) => {
    let v02 = document.querySelector(`#miVideo02`);
    v02.pause();
  });
});
