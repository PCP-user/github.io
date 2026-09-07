function toggleSearch() {
  const input = document.getElementById("search-input");
  input.style.display = input.style.display === "block" ? "none" : "block";
}
window.onload = () => {
  document.getElementById("last-modified").textContent = document.lastModified.split(" ")[0];
};