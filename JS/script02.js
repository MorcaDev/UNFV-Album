window.addEventListener("load", () => {
  const button01 = document.querySelector(`.nav__button`);
  const button02 = document.querySelector(`.main__button`);

  button01.addEventListener("click", () => {
    window.location.href = "./secondaryModule/villa_ar.html";
  });
  button02.addEventListener("click", () => {
    window.location.href = "./secondaryModule/villa_vr.html";
  });
});
