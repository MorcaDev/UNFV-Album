window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(".main__button");
  let buttonArray = [...buttons];

  buttonArray[0].addEventListener("click", () => {
    window.location.href = "./WebPages/villa_vr.html";
  });
  buttonArray[1].addEventListener("click", () => {
    window.location.href = "./WebPages/villa_ar.html";
  });
});
