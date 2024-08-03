window.addEventListener("load", () => {
  // PROFESORES
  const profesImages = [
    "../src/img/profesores/cesar cuba.jpg",
    "../src/img/profesores/ciro rodriguez.jpg",
    "../src/img/profesores/ivan crispin.jpg",
    "../src/img/profesores/jose gil.jpg",
    "../src/img/profesores/juan francisco madrid cisneros.jpg",
    "../src/img/profesores/roberto casas.jpg",
    "../src/img/profesores/ronal paredes.jpg",
    "../src/img/profesores/tito aguilar.jpg",
    "../src/img/profesores/vladimir hilario quispe orihuela.jpg",
  ];

  const profesImagePlane = document.getElementById("profesImagePlane");
  let currentIndex = 0;

  function changeProfesImage() {
    setInterval(() => {
      profesImagePlane.setAttribute(
        "material",
        "src",
        profesImages[currentIndex]
      );
      currentIndex = (currentIndex + 1) % profesImages.length;
    }, 3000);
  }

  changeProfesImage();

  // BIBLIOTECA
  const bibliotecaImage = [
    "../src/img/biblioteca/img_01.jpg",
    "../src/img/biblioteca/img_02.jpg",
  ];

  const bibliotecaImagePlane = document.getElementById("bibliotecaImagePlane");
  let currentIndex_biblio = 0;

  function changeBibliotecaImage() {
    setInterval(() => {
      bibliotecaImagePlane.setAttribute(
        "material",
        "src",
        bibliotecaImage[currentIndex_biblio]
      );
      currentIndex_biblio = (currentIndex_biblio + 1) % bibliotecaImage.length;
    }, 3000);
  }

  changeBibliotecaImage();
});
