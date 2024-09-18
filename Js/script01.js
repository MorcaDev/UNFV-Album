window.addEventListener(`load`, (e) => {

  // video makers
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

  // 3d models markers
  let informatica_marker = document.getElementById("informatica_marker");
  let mecatronica_marker = document.getElementById("mecatronica_marker");
  let electronica_marker = document.getElementById("electronica_marker");
  let telecomunicaciones_marker = document.getElementById(
    "telecomunicaciones_marker"
  );

  let informatica_entity = document.getElementById("informatica_entity");
  let mecatronica_entity = document.getElementById("mecatronica_entity");
  let electronica_entity = document.getElementById("electronica_entity");
  let telecomunicaciones_entity = document.getElementById(
    "telecomunicaciones_entity"
  );

  // informatica
  informatica_marker.addEventListener("markerFound", (e) => {
    isMarkerVisible = true;
    informatica_entity.setAttribute("gesture-handler", "");
  });

  informatica_marker.addEventListener("markerLost", (e) => {
    isMarkerVisible = false;
    informatica_entity.removeAttribute("gesture-handler");
  });

  // mecatronica
  mecatronica_marker.addEventListener("markerFound", (e) => {
    isMarkerVisible = true;
    mecatronica_entity.setAttribute("gesture-handler", "");
  });

  mecatronica_marker.addEventListener("markerLost", (e) => {
    isMarkerVisible = false;
    mecatronica_entity.removeAttribute("gesture-handler");
  });

  // electronica
  electronica_marker.addEventListener("markerFound", (e) => {
    isMarkerVisible = true;
    electronica_entity.setAttribute("gesture-handler", "");
  });

  electronica_marker.addEventListener("markerLost", (e) => {
    isMarkerVisible = false;
    electronica_entity.removeAttribute("gesture-handler");
  });

  // telecomunicaciones
  telecomunicaciones_marker.addEventListener("markerFound", (e) => {
    isMarkerVisible = true;
    telecomunicaciones_entity.setAttribute("gesture-handler", "");
  });

  telecomunicaciones_marker.addEventListener("markerLost", (e) => {
    isMarkerVisible = false;
    telecomunicaciones_entity.removeAttribute("gesture-handler");
  });
});
