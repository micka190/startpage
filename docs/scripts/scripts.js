const openAllComics = () => {
  document.querySelectorAll(".comics a").forEach(anchor => window.open(anchor.href, "_blank"));
}

const main = () => {
  document.getElementById("btn-open-all").addEventListener("click", openAllComics);

  const hours = new Date().getHours();
  if (hours >= 18) {
    document.documentElement.dataset.theme = "dark";
  }
}

window.addEventListener("load", main);