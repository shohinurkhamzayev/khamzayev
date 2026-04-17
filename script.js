// DATA
const games = [
  { name: "PUBG Mobile", id: "51787188360" },
  { name: "CS2", id: "1487550917" },
  { name: "COD Mobile", id: "7281177723002355713" }
];

// RENDER GAMES
const gamesContainer = document.getElementById("games");

games.forEach(g => {
  const div = document.createElement("div");
  div.innerHTML = `<b>${g.name}</b><br>ID: ${g.id}`;
  gamesContainer.appendChild(div);
});

// NAVIGATION
function navigate(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page-${page}`).classList.add("active");
}

// LANGUAGE
const translations = {
  uz: {
    name: "Shohinur Xamzayev",
    socials: "Ijtimoiy"
  },
  ru: {
    name: "Шохинур Хамзаев",
    socials: "Соцсети"
  }
};

function setLanguage(lang) {
  document.getElementById("user-name").textContent = translations[lang].name;
  document.getElementById("socials-title").textContent = translations[lang].socials;

  document.querySelectorAll(".lang button").forEach(b => b.classList.remove("active"));
  document.getElementById(`btn-${lang}`).classList.add("active");
}
