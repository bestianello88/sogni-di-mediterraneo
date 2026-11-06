const works = [
  ["01", "Volto di sale", "assets/01-volto-di-sale.png"],
  ["02", "Finestra sul blu", "assets/02-finestra-sul-blu.png"],
  ["03", "Danza delle foglie", "assets/03-danza-delle-foglie.png"],
  ["04", "Natura morta con limoni", "assets/04-natura-morta-con-limoni.png"],
  ["05", "Luna sopra il porto", "assets/05-luna-sopra-il-porto.png"],
  ["06", "Costellazione marina", "assets/06-costellazione-marina.png"],
  ["07", "Il silenzio degli archi", "assets/07-il-silenzio-degli-archi.png"],
  ["08", "La conchiglia sospesa", "assets/08-la-conchiglia-sospesa.png"],
  ["09", "Due figure al sole", "assets/09-due-figure-al-sole.png"],
  ["10", "Il giardino del sogno", "assets/10-il-giardino-del-sogno.png"]
];

// La direzione artistica richiede esplicitamente il movimento subacqueo.
document.body.classList.add("motion-enabled");

const lightbox = document.querySelector("#lightbox");
const image = document.querySelector("#lightbox-image");
const title = document.querySelector("#lightbox-title");
const number = document.querySelector("#lightbox-number");
let current = 0;

function showWork(index) {
  current = (index + works.length) % works.length;
  const [workNumber, workTitle, src] = works[current];
  image.src = src;
  image.alt = workTitle;
  title.textContent = workTitle;
  number.textContent = `${workNumber} / 10`;
  if (!lightbox.open) lightbox.showModal();
}

document.querySelectorAll("[data-art]").forEach((card) => {
  card.addEventListener("click", () => showWork(Number(card.dataset.art)));
});
document.querySelector("#lightbox-close").addEventListener("click", () => lightbox.close());
document.querySelector("#lightbox-prev").addEventListener("click", () => showWork(current - 1));
document.querySelector("#lightbox-next").addEventListener("click", () => showWork(current + 1));
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "Escape") lightbox.close();
  if (event.key === "ArrowLeft") showWork(current - 1);
  if (event.key === "ArrowRight") showWork(current + 1);
});
