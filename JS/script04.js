window.addEventListener("load", () => {
  const img01 = document.querySelector(`.INFORMATICA`);
  const img02 = document.querySelector(`.MECATRONICA`);
  const img03 = document.querySelector(`.ELECTRONICA`);
  const img04 = document.querySelector(`.TELECOMUNICACIONES`);

  img01.addEventListener("click", () => {
    window.location.href = "./vr_gallery/scene_informatica.html";
  });
  img02.addEventListener("click", () => {
    window.location.href = "./vr_gallery/scene_mecatronica.html";
  });

  img03.addEventListener("click", () => {
    window.location.href = "./vr_gallery/scene_electronica.html";
  });

  img04.addEventListener("click", () => {
    window.location.href = "./vr_gallery/scene_telecomunicaciones.html";
  });



});
