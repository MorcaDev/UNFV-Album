window.addEventListener("load", () => {
  // PROFESORES
  const profesImages = [
    "../Content/img/profesores/cesar cuba.jpg",
    "../Content/img/profesores/ciro rodriguez.jpg",
    "../Content/img/profesores/ivan crispin.jpg",
    "../Content/img/profesores/jose gil.jpg",
    "../Content/img/profesores/juan francisco madrid cisneros.jpg",
    "../Content/img/profesores/roberto casas.jpg",
    "../Content/img/profesores/ronal paredes.jpg",
    "../Content/img/profesores/tito aguilar.jpg",
    "../Content/img/profesores/vladimir hilario quispe orihuela.jpg",
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
    "../Content/img/biblioteca/img_01.jpg",
    "../Content/img/biblioteca/img_02.jpg",
    "../Content/img/biblioteca/img_03.jpg",
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

  // SALONES
  const salonImage = [
    "../Content/img/salones/img_01.jpg",
    "../Content/img/salones/img_02.jpg",
    "../Content/img/salones/img_03.jpg",
    "../Content/img/salones/img_04.jpg",
  ];

  const salonImagePlane = document.getElementById("salonImagePlane");
  let currentIndex_salon = 0;

  function changeSalonImage() {
    setInterval(() => {
      salonImagePlane.setAttribute(
        "material",
        "src",
        salonImage[currentIndex_salon]
      );
      currentIndex_salon = (currentIndex_salon + 1) % salonImage.length;
    }, 3000);
  }

  changeSalonImage();

});
