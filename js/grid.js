document.addEventListener("DOMContentLoaded", () => {
const grid = document.querySelector(".grille-plantes");
const items = Array.from(grid.children);

items.sort((a, b) => {
const nomA = a.querySelector(".nom-plante").textContent.trim().toLowerCase();
const nomB = b.querySelector(".nom-plante").textContent.trim().toLowerCase();
return nomA.localeCompare(nomB);
});

items.forEach(item => grid.appendChild(item));
});

document.querySelectorAll('.image-container img').forEach(img => {
img.addEventListener('load', () => {
img.classList.add('loaded');
img.parentElement.classList.remove('skeleton');
});
});