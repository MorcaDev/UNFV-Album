window.addEventListener("load", () => {
  //desktop devices

  const img01 = document.querySelector(`.INFORMATICA`);
  const img02 = document.querySelector(`.MECATRONICA`);
  const img03 = document.querySelector(`.ELECTRONICA`);
  const img04 = document.querySelector(`.TELECOMUNICACIONES`);

  img01.addEventListener("click", () => {
    window.location.href = "./vr_gallery/informatica.html";
  });
  img02.addEventListener("click", () => {
    window.location.href = "./vr_gallery/mecatronica.html";
  });

  img03.addEventListener("click", () => {
    window.location.href = "./vr_gallery/electronica.html";
  });

  img04.addEventListener("click", () => {
    window.location.href = "./vr_gallery/telecomunicaciones.html";
  });

  //mobile devices

  const mb01 = document.querySelector(`.mobileMain__INFORMATICA`);
  const mb02 = document.querySelector(`.mobileMain__MECATRONICA`);
  const mb03 = document.querySelector(`.mobileMain__ELECTRONICA`);
  const mb04 = document.querySelector(`.mobileMain__TELECOMUNICACIONES`);

  mb01.addEventListener("click", () => {
    window.location.href = "./vr_gallery/informatica.html";
  });
  mb02.addEventListener("click", () => {
    window.location.href = "./vr_gallery/mecatronica.html";
  });

  mb03.addEventListener("click", () => {
    window.location.href = "./vr_gallery/electronica.html";
  });

  mb04.addEventListener("click", () => {
    window.location.href = "./vr_gallery/telecomunicaciones.html";
  });
});
