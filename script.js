function toggleMode() {
  const html = document.documentElement;

  const image = document.querySelector("#profile img");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    return image.setAttribute("src", "./assets/Avatar-light.png");
  } else {
    return image.setAttribute("src", "./assets/Avatar.png");
  }
}
