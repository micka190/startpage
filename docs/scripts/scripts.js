const openAllComics = () => {
  document.querySelectorAll(".comics a").forEach(anchor => window.open(anchor.href, "_blank"));
}

const main = () => {
  document.getElementById("btn-open-all").addEventListener("click", openAllComics);
}

window.addEventListener("load", main);