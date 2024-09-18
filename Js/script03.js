window.addEventListener("load", () => {
  // PROFESORES
  const profesImages = [
    "../Assets/img/profesores/cesar cuba.jpg",
    "../Assets/img/profesores/ciro rodriguez.jpg",
    "../Assets/img/profesores/ivan crispin.jpg",
    "../Assets/img/profesores/jose gil.jpg",
    "../Assets/img/profesores/juan francisco madrid cisneros.jpg",
    "../Assets/img/profesores/roberto casas.jpg",
    "../Assets/img/profesores/ronal paredes.jpg",
    "../Assets/img/profesores/tito aguilar.jpg",
    "../Assets/img/profesores/vladimir hilario quispe orihuela.jpg",
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
    "../Assets/img/biblioteca/img_01.jpg",
    "../Assets/img/biblioteca/img_02.jpg",
    "../Assets/img/biblioteca/img_03.jpg",
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
    "../Assets/img/salones/img_01.jpg",
    "../Assets/img/salones/img_02.jpg",
    "../Assets/img/salones/img_03.jpg",
    "../Assets/img/salones/img_04.jpg",
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
